import { Argument, Command } from "commander";
import actions from "src/interface/actions/actions";
import { parseGameMode } from "src/interface/parsing";
import { GameMode, GameName } from "src/interface/types";

const action = async ({
  game,
  gameMode,
}: {
  game: string;
  gameMode: GameMode;
}): Promise<void> => {
  await actions.startGameplay({ game, gameMode });
};

const commandToStartGameplay = {
  // Play a game
  arguments: [
    new Argument("<game>", "The game to be played.")
      .choices([GameName.Connect4, GameName.TicTacToe])
      .argRequired(),
    new Argument("[mode]", "The game mode.")
      .choices([GameMode.PvP, GameMode.PvC, GameMode.CvC])
      .argParser(parseGameMode)
      .argRequired(),
  ],
  command: new Command("play").description("Play a game.").action(action),
};

export default commandToStartGameplay;
