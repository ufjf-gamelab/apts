// import { GameName } from "@repo/engine/interface/types.js";
// import actions from "@repo/interface/actions/actions.js";
// import { Argument, Command } from "commander";
// import { parseJsonFile } from "../../parsing.js";

// const executeAction = (gameName: GameName): void => {
//   const gameDescription = actions.generateGameDescription(gameName);
//   console.log(gameDescription);
// };

// const generateGameDescription = {
//   arguments: [
//     new Argument("<game>", "The game to be implemented.")
//       .choices([GameName.Connect4, GameName.TicTacToe])
//       .argRequired(),
//     new Argument("<output>", "The output file path.").argParser(parseJsonFile),
//   ],
//   command: new Command("desc-file")
//     .description("Get the description file for implementing a new game.")
//     .action(executeAction),
// };

// export default generateGameDescription;
