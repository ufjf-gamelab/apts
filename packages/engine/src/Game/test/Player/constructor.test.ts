import { expect, test } from "vitest";

import TestingPlayer from "../Player.js";
import { createPlayers, type TestPlayerParams } from "./setup.js";

const shouldBeAnInstanceOfItsClass = ({
  player,
  testDescriptor,
}: TestPlayerParams): void => {
  test(`${testDescriptor}: player should be an instance of the class {TestingPlayer}`, () => {
    expect(player).toBeInstanceOf(TestingPlayer);
  });
};

const testConstructorForEveryPlayer = (): void => {
  const players = createPlayers();
  players.forEach(({ dataRelatedToCreatedPlayer: { nameOfIndex }, player }) => {
    shouldBeAnInstanceOfItsClass({ player, testDescriptor: nameOfIndex });
  });
};

testConstructorForEveryPlayer();
