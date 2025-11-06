import TestingState, { type TestingStateParams } from "../../State.js";
import { createGame } from "../Game/setup.js";
import { createMoves } from "../Move/setup.js";
import { createPlayers, IndexOfTestingPlayer } from "../Player/setup.js";
import {
  type CreatedSlotsAndRelatedData,
  createSlotsForInitialState,
} from "../Slot/setup.js";

interface CreatedStateAndRelatedData {
  dataRelatedToCreatedState: DataRelatedToCreatedState;
  state: TestingState;
}

interface DataRelatedToCreatedState {
  game: TestingStateParams["game"];
  indexOfPlayer: TestingStateParams["indexOfPlayer"];
  score: TestingStateParams["score"];
  slots: CreatedSlotsAndRelatedData;
}

interface TestStateParams {
  state: TestingState;
  testDescriptor: string;
}

const createState = ({
  game,
  indexOfPlayer,
  score,
  slots,
}: DataRelatedToCreatedState): CreatedStateAndRelatedData => {
  const state = new TestingState({
    game,
    indexOfPlayer,
    score,
    slots: Array.from(slots.values().map(({ slot }) => slot)),
  });

  return {
    dataRelatedToCreatedState: {
      game,
      indexOfPlayer,
      score,
      slots,
    },
    state,
  };
};

const createInitialState = (): CreatedStateAndRelatedData => {
  const moves = createMoves();
  const players = createPlayers();
  const slots = createSlotsForInitialState();
  const { game } = createGame({
    moves,
    players,
  });

  return createState({
    game,
    indexOfPlayer: IndexOfTestingPlayer.One,
    score: TestingState.initializeScore(game.getQuantityOfPlayers()),
    slots,
  });
};

export type { CreatedStateAndRelatedData, TestStateParams };
export { createInitialState, createState };
