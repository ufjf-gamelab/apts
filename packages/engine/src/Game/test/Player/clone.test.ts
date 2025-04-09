import { expect, test } from "vitest";

import TestingPlayer from "../Player.js";
import { createPlayers, type TestPlayerParams } from "./setup.js";

const cloneShouldCreateANewInstance = ({
  player,
  testDescriptor,
}: TestPlayerParams): void => {
  test(`${testDescriptor}: clone() should return a new instance of {TestingPlayer}`, () => {
    const clone = player.clone();
    expect(clone).toBeInstanceOf(TestingPlayer);
    expect(clone).not.toBe(player);
  });
};

const testClone = ({ player, testDescriptor }: TestPlayerParams): void => {
  cloneShouldCreateANewInstance({ player, testDescriptor });
};

const testCloneForEveryPlayer = (): void => {
  const players = createPlayers();
  players.forEach(({ dataRelatedToCreatedPlayer: { nameOfIndex }, player }) => {
    testClone({ player, testDescriptor: nameOfIndex });
  });
};

testCloneForEveryPlayer();
