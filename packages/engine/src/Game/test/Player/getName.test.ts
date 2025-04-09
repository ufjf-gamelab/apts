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
