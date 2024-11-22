/* eslint-disable no-await-in-loop */
import { Choice } from "prompts";
import Game from "src/engine/Game/Game";
import Move from "src/engine/Game/Move";
import Player from "src/engine/Game/Player";
import State from "src/engine/Game/State";
import { GameMode, GetInput } from "..";

const printContext = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  player: P,
): void => {
  console.log(`${player.getName()}'s turn`);
};

const getContext = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  state: S,
  player: P,
): M[] => {
  printContext(player);
  return state.getValidMoves();
};

const playMove = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  state: S,
  move: M,
): S => {
  const nextState = move.play(state);
  console.log(nextState.toString());
  return nextState;
};

const hasGameEnded = <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>(
  state: S,
): boolean => {
  if (state.isFinal()) {
    console.log("Game has ended.");
    const winner = state.getGame()
    if (turnOutcome.winner) {
      const playerData = state.getGame().getPlayerData(turnOutcome.winner);
      console.log(`${playerData.name} won!`);
    }
    return true;
  }
  return false;
};

interface PlayParams<
  P extends Player,
  M extends Move,
  S extends State<P, M>,
  G extends Game<P, M, S>,
> {
  getInput: GetInput;
  game: G;
  gameMode: GameMode;
}

const main = async <
  P extends Player,
  M extends Move,
  S extends State<P, M>,
  G extends Game<P, M, S>,
>({
  getInput,
  game,
  gameMode,
}: PlayParams<P, M, S, G>) => {
  console.log(`Game: ${game.getName()}`);
  console.log(`Mode: ${gameMode}\n`);

  let state = game.getInitialState();
  let player = state.getplayer();
  let gameHasEnded = false;

  console.log(state.toString());

  while (!gameHasEnded) {
    const validMoves = getContext(state, player);
    console.log(state);

    const input = await getInput({
      choices: Array.from(validMoves.values()).map(
        (move: M) =>
          ({
            description: move.getDescription(),
            title: move.getTitle(),
            value: move,
          }) as Choice,
      ),
      message: "Enter a move",
      name: "move",
      type: "select",
    });
    const chosenKeyedMove = input.move as M;

    state = playMove(state, chosenKeyedMove);
    player = state.getPlayer();
    gameHasEnded = hasGameEnded(state);
  }
};

export default main;
