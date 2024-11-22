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
  const game = state.getGame();
  return game.getValidMoves(state);
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
  const game = state.getGame();
  if (game.isFinal(state)) {
    console.log(game.getEndGameMessage(state));
    console.log(game.getPrettyScoreboard(state));
    return true;
  }
  return false;
};

interface PlayParams<
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
> {
  getInput: GetInput;
  game: G;
  gameMode: GameMode;
}

const main = async <
  P extends Player,
  M extends Move<P, M, S, G>,
  S extends State<P, M, S, G>,
  G extends Game<P, M, S, G>,
>({
  getInput,
  game,
  gameMode,
}: PlayParams<P, M, S, G>) => {
  console.log(`Game: ${game.getName()}`);
  console.log(`Mode: ${gameMode}\n`);

  let state = game.getInitialState();
  let player = game.getPlayer(state.getPlayerKey());
  let gameHasEnded = false;

  console.log(state.toString());

  while (!gameHasEnded) {
    const validMoves = getContext<P, M, S, G>(state, player);

    const choices: Choice[] = validMoves.map(move => ({
      description: move.getDescription(),
      title: move.getTitle(),
      value: move,
    }));

    const input = (await getInput({
      choices,
      message: "Enter a move",
      name: "move",
      type: "select",
    })) as { move: M };
    const chosenMove = input.move;

    state = playMove<P, M, S, G>(state, chosenMove);
    player = game.getPlayer(state.getPlayerKey());
    gameHasEnded = hasGameEnded<P, M, S, G>(state);
  }
};

export default main;
