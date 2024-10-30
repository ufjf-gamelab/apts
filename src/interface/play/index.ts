/* eslint-disable no-await-in-loop */
import { Choice } from "prompts";
import Game, { Player } from "src/engine/Game/Game";
import State from "src/engine/Game/State";
import { Move } from "src/games/TicTacToe/types";
import { GameMode, GetInput } from "..";

const getValidMoves = <G extends Game>(state: State<G>) => {
  const validMovesMask = state.getValidMoves();
  return validMovesMask.reduce<number[]>((acc, validMove, index) => {
    if (validMove) {
      acc.push(index);
    }
    return acc;
  }, []);
};

const printContext = <G extends Game>(state: State<G>, player: Player) => {
  const playerData = state.getGame().getPlayerData(player);
  console.log(`${playerData.name}'s turn`);
  return getValidMoves(state);
};

const playMove = <G extends Game>(state: State<G>, move: Move): State<G> => {
  const validMoves = state.getValidMoves();
  if (validMoves[move] === false) {
    console.error("Invalid move.");
    return state;
  }

  const newState = state.playMove(move);
  console.log(newState.toString());
  return newState;
};

const hasGameEnded = <G extends Game>(state: State<G>): boolean => {
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

interface PlayParams<G extends Game> {
  getInput: GetInput;
  game: G;
  gameMode: GameMode;
}

const main = async <G extends Game>({
  getInput,
  game,
  gameMode,
}: PlayParams<G>) => {
  console.log(`Game: ${game.getName()}`);
  console.log(`Mode: ${gameMode}\n`);

  let state = game.getInitialState();
  let player = state.getCurrentPlayer();
  let gameHasEnded = false;

  console.log(state.toString());

  while (!gameHasEnded) {
    const validMoves = printContext(state, player);

    const input = await getInput({
      choices: validMoves.map(
        move => ({ title: move.toString(), value: move }) as Choice,
      ),
      message: "Enter a move",
      name: "move",
      type: "select",
    });
    const chosenMove = input.move as Move;

    state = playMove(state, chosenMove);
    player = state.getCurrentPlayer();
    gameHasEnded = hasGameEnded(state);
  }
};

export default main;
