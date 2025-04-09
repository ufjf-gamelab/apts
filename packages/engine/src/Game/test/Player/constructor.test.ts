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

const testConstructor = ({
  player,
  testDescriptor,
}: TestPlayerParams): void => {
  shouldBeAnInstanceOfItsClass({ player, testDescriptor });
};

const testConstructorForEveryPlayer = (): void => {
  const players = createPlayers();
  players.forEach(({ dataRelatedToCreatedPlayer: { nameOfIndex }, player }) => {
    testConstructor({ player, testDescriptor: nameOfIndex });
  });
};

testConstructorForEveryPlayer();
