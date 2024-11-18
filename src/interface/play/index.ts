/* eslint-disable no-await-in-loop */
import { Choice } from "prompts";
import Game, { Player } from "src/engine/Game/Game";
import Move, { KeyedMove } from "src/engine/Game/Move";
import State from "src/engine/Game/State";
import { GameMode, GetInput } from "..";

const printContext = <G extends Game<M>, M extends Move>(
  state: State<G, M>,
  player: Player,
): void => {
  const playerData = state.getGame().getPlayerData(player);
  console.log(`${playerData.name}'s turn`);
};

const getContext = <G extends Game<M>, M extends Move>(
  state: State<G, M>,
  player: Player,
): KeyedMove<M>[] => {
  printContext(state, player);
  const indexesOfValidMoves = state.getIndexesOfValidMoves();
  return Array.from(indexesOfValidMoves).map(index => ({
    key: index,
    move: state.getGame().getMove(index),
  }));
};

const playMove = <G extends Game<M>, M extends Move>(
  state: State<G, M>,
  keyedMove: KeyedMove<M>,
): State<G, M> => {
  const newState = state.playMove(keyedMove);
  console.log(newState.toString());
  return newState;
};

const hasGameEnded = <G extends Game<M>, M extends Move>(
  state: State<G, M>,
): boolean => {
  const turnOutcome = state.getTurnOutcome();
  if (turnOutcome.gameHasEnded) {
    console.log("Game has ended.");
    if (turnOutcome.winner) {
      const playerData = state.getGame().getPlayerData(turnOutcome.winner);
      console.log(`${playerData.name} won!`);
    }
    return true;
  }
  return false;
};

interface PlayParams<G extends Game<M>, M extends Move> {
  getInput: GetInput;
  game: G;
  gameMode: GameMode;
}

const main = async <G extends Game<M>, M extends Move>({
  getInput,
  game,
  gameMode,
}: PlayParams<G, M>) => {
  console.log(`Game: ${game.getName()}`);
  console.log(`Mode: ${gameMode}\n`);

  let state = game.getInitialState();
  let player = state.getCurrentPlayer();
  let gameHasEnded = false;

  console.log(state.toString());

  while (!gameHasEnded) {
    const validMoves = getContext(state, player);

    const input = await getInput({
      choices: Array.from(validMoves.values()).map(
        (keyedMove: KeyedMove<M>) =>
          ({
            description: keyedMove.move.getDescription(),
            title: keyedMove.move.getTitle(),
            value: keyedMove,
          }) as Choice,
      ),
      message: "Enter a move",
      name: "move",
      type: "select",
    });
    const chosenMove = input.move as KeyedMove<M>;

    state = playMove(state, chosenMove);
    player = state.getCurrentPlayer();
    gameHasEnded = hasGameEnded(state);
  }
};

export default main;
