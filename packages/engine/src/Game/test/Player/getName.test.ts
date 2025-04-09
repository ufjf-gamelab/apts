import { expect, test } from "vitest";

import type TestingPlayer from "../Player.js";
import { createPlayers, type TestPlayerParams } from "./setup.js";

const getNameShouldReturn = ({
  expectedName,
  player,
  testDescriptor,
}: TestPlayerParams & {
  expectedName: ReturnType<TestingPlayer["getName"]>;
}): void => {
  test(`${testDescriptor}: getName() should return {${expectedName}}`, () => {
    expect(player.getName()).toBe(expectedName);
  });
};

const testGetName = ({
  expectedName,
  player,
  testDescriptor,
}: TestPlayerParams & {
  expectedName: ReturnType<TestingPlayer["getName"]>;
}): void => {
  getNameShouldReturn({
    expectedName,
    player,
    testDescriptor,
  });
};

const testGetNameForEveryPlayer = (): void => {
  const players = createPlayers();
  players.forEach(
    ({ dataRelatedToCreatedPlayer: { name, nameOfIndex }, player }) => {
      testGetName({
        expectedName: name,
        player,
        testDescriptor: nameOfIndex,
      });
    },
  );
};

testGetNameForEveryPlayer();
