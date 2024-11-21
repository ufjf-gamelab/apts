/* eslint-disable no-await-in-loop */
import { Choice } from "prompts";
import Game from "src/engine/Game/Game";
import Move, { KeyedMove } from "src/engine/Game/Move";
import Player from "src/engine/Game/Player";
import State from "src/engine/Game/State";
import { GameMode, GetInput } from "..";

const printContext = <P extends Player, M extends Move, S extends State<P, M>>(
  state: S,
  player: P,
): void => {
  const playerData = state.getGame().getPlayerData(player);
  console.log(`${playerData.name}'s turn`);
};

const getContext = <P extends Player, M extends Move, S extends State<P, M>>(
  state: S,
  player: P,
): KeyedMove<M>[] => {
  printContext(state, player);
  const keysOfTheValidMoves = state.getKeysOfTheValidMoves();
  return Array.from(keysOfTheValidMoves).map(index => ({
    key: index,
    move: state.getGame().getMove(index),
  }));
};

const playMove = <P extends Player, M extends Move, S extends State<P, M>>(
  state: S,
  move: M,
): S => {
  const nextState = state.playMove(move);
  console.log(nextState.toString());
  return nextState;
};

const hasGameEnded = <P extends Player, M extends Move, S extends State<P, M>>(
  state: S,
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
  let player = state.getNextPlayer();
  let gameHasEnded = false;

  console.log(state.toString());

  while (!gameHasEnded) {
    const validKeyedMoves = getContext(state, player);
    console.log(state);

    const input = await getInput({
      choices: Array.from(validKeyedMoves.values()).map(
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
    const chosenKeyedMove = input.move as KeyedMove<M>;

    state = playMove(state, chosenKeyedMove.move);
    player = state.getPlayer();
    gameHasEnded = hasGameEnded(state);
  }
};

export default main;
