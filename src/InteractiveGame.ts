import { askForAction } from ".";
import TicTacToe, { Outcome, Player } from "./TicTacToe";

const game = new TicTacToe();
let player = Player.One;
let state = game.getInitialState();

// Play a turn of TicTacToe and return whether the game is over
export async function play(): Promise<boolean> {
  game.printState(state);
  try {
    let action = await askForAction(`P${player} move: `);
    if (action < 0 || action >= game.rowCount * game.columnCount) {
      console.log("Invalid move!");
      throw new Error("Invalid move!");
    }

    const validActions = game.getValidActions(state);

    // Perform the action if it is valid
    if (validActions[action] === true) {
      state = game.getNextState(state, action, player);

      const actionOutcome = game.getActionOutcome(state, action);
      if (actionOutcome.isTerminal) {
        game.printState(state);
        if (actionOutcome.value === Outcome.Win)
          console.log(`Player ${player} has won!`);
        else console.log("It's a draw!");
        return false;
      }

      player = game.getOpponent(player);
    } else console.log("Invalid move!");

    return true;
  } catch (e) {
    return true;
  }
}