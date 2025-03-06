// import Game from "@repo/engine/engine/Game/Game.js";
// import Move from "@repo/engine/engine/Game/Move.js";
// import Player from "@repo/engine/engine/Game/Player.js";
// import State from "@repo/engine/engine/Game/State.js";
// import { GameMode } from "@repo/engine/interface/types.js";
// import { Choice } from "prompts";
// import { GetInput } from "../../environments/fileSystem/program.js";

// const printContext = <
//   P extends Player,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// >(
//   player: P,
// ): void => {
//   console.log(`${player.getName()}'s turn`);
// };

// const getContext = <
//   P extends Player,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// >(
//   state: S,
//   player: P,
// ): M[] => {
//   printContext(player);
//   return state.getValidMoves();
// };

// const playMove = <
//   P extends Player,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// >(
//   state: S,
//   move: M,
// ): S => {
//   const nextState = move.play(state);
//   console.log(nextState.toString());
//   return nextState;
// };

// const hasGameEnded = <
//   P extends Player,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// >(
//   state: S,
// ): boolean => {
//   if (state.isFinal()) {
//     console.log("Game has ended.");
//     console.log(state.getGame().getGameOverMessage(state));
//     return true;
//   }
//   return false;
// };

// interface PlayParams<
//   P extends Player,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// > {
//   getInput: GetInput;
//   game: G;
//   gameMode: GameMode;
// }

// const main = async <
//   P extends Player,
//   M extends Move<P, M, S, G>,
//   S extends State<P, M, S, G>,
//   G extends Game<P, M, S, G>,
// >({
//   getInput,
//   game,
//   gameMode,
// }: PlayParams<P, M, S, G>): Promise<void> => {
//   console.log(`Game: ${game.getName()}`);
//   console.log(`Mode: ${gameMode}\n`);

//   let state = game.getInitialState();
//   let player = state.getPlayer();
//   let gameHasEnded = false;

//   console.log(state.toString());

//   while (!gameHasEnded) {
//     const validMoves = getContext<P, M, S, G>(state, player);

//     // eslint-disable-next-line no-await-in-loop
//     const input = await getInput({
//       choices: Array.from(validMoves.values()).map(
//         (move: M) =>
//           ({
//             description: move.getDescription(),
//             title: move.getTitle(),
//             value: move,
//           }) as Choice,
//       ),
//       message: "Enter a move",
//       name: "move",
//       type: "select",
//     });
//     const chosenKeyedMove = input["move"] as M;

//     state = playMove(state, chosenKeyedMove);
//     state = state.clone();
//     player = state.getPlayer();
//     gameHasEnded = hasGameEnded(state);
//   }
// };

// export default main;
