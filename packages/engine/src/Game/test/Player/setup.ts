import TestingPlayer, { TestingPlayerKey } from "../Player.js";

const getNameOfPlayerKey = (playerKey: TestingPlayerKey): string =>
  String(
    TestingPlayerKey[playerKey.toString() as keyof typeof TestingPlayerKey],
  );

const createPlayers = (): TestingPlayer[] => {
  const alice = new TestingPlayer({
    name: getNameOfPlayerKey(TestingPlayerKey.One),
    symbol: "A",
  });

  const bruno = new TestingPlayer({
    name: getNameOfPlayerKey(TestingPlayerKey.Two),
    symbol: "B",
  });

  return [alice, bruno];
};

export { createPlayers, getNameOfPlayerKey };
