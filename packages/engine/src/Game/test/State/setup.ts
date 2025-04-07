import { createGame, QUANTITY_OF_SLOTS } from "../Game/setup.js";
import { createMoves } from "../Move/setup.js";
import { TestingPlayerKey } from "../Player.js";
import { createPlayers } from "../Player/setup.js";
import TestingState, {
  type TestingSlot,
  type TestingStateParams,
} from "../State.js";

interface TestStateParams {
  state: TestingState;
  testDescriptor: string;
}

const createState = ({
  game,
  slots,
}: {
  game: TestingStateParams["game"];
  slots: TestingStateParams["slots"];
}): TestingState =>
  new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots,
  });

const createInitialState = (): TestingState => {
  const movesList = createMoves().map(({ move }) => move);
  const playersList = createPlayers();
  const game = createGame({
    movesList,
    playersList,
  });
  const slots = new Array<TestingSlot>(QUANTITY_OF_SLOTS).fill(null);
  return new TestingState({
    game,
    playerKey: TestingPlayerKey.One,
    slots,
  });
};

export { createInitialState, createState };
export type { TestStateParams };
