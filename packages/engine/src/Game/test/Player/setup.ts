import TestingPlayer from "../Player.js";

interface TestPlayerParams {
  player: TestingPlayer;
  testDescriptor: string;
}

const createPlayers = (): TestingPlayer[] => {
  const alice = new TestingPlayer({
    name: "Alice",
    symbol: "X",
  });

  const bruno = new TestingPlayer({
    name: "Bruno",
    symbol: "O",
  });

  return [alice, bruno];
};

export type { TestPlayerParams };
export { createPlayers };
