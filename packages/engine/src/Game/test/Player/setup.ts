import TestingPlayer, { TestingPlayerKey } from "../Player.js";

interface CreatedPlayerAndRelatedData {
  name: TestingPlayer["name"];
  nameOfPlayerKey: keyof typeof TestingPlayerKey;
  player: TestingPlayer;
  symbol: TestingPlayer["symbol"];
  valueOfPlayerKey: TestingPlayerKey;
}

interface TestPlayerParams {
  player: TestingPlayer;
  testDescriptor: string;
}

const createPlayer = ({
  name,
  nameOfPlayerKey,
  symbol,
  valueOfPlayerKey,
}: {
  name: TestingPlayer["name"];
  nameOfPlayerKey: keyof typeof TestingPlayerKey;
  symbol: TestingPlayer["symbol"];
  valueOfPlayerKey: TestingPlayerKey;
}): CreatedPlayerAndRelatedData => {
  const player = new TestingPlayer({
    name,
    symbol,
  });
  return {
    name,
    nameOfPlayerKey,
    player,
    symbol,
    valueOfPlayerKey,
  };
};

const createPlayers = (): CreatedPlayerAndRelatedData[] => {
  const nameOfPlayerKeyOfAlice = "One";
  const alice = createPlayer({
    name: "Alice",
    nameOfPlayerKey: nameOfPlayerKeyOfAlice,
    symbol: "X",
    valueOfPlayerKey: TestingPlayerKey[nameOfPlayerKeyOfAlice],
  });

  const nameOfPlayerKeyOfBruno = "Two";
  const bruno = createPlayer({
    name: "Bruno",
    nameOfPlayerKey: nameOfPlayerKeyOfBruno,
    symbol: "O",
    valueOfPlayerKey: TestingPlayerKey[nameOfPlayerKeyOfBruno],
  });

  return [alice, bruno];
};

export type { CreatedPlayerAndRelatedData, TestPlayerParams };
export { createPlayers };
