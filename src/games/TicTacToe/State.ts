import { INCREMENT_ONE } from "src/types";
import State, { StateParams } from "../../engine/Game/State";
import TicTacToeGame from "./Game";
import { Position, TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";
import { Slot } from "./types";

interface TicTacToeStateParams
  extends StateParams<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  > {
  readonly lastAssertedPosition: Position | null;
}

export class TicTacToeState extends State<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
> {
  public readonly lastAssertedPosition: TicTacToeStateParams["lastAssertedPosition"];

  constructor({
    game,
    slots,
    playerKey,
    lastAssertedPosition,
  }: TicTacToeStateParams) {
    super({
      game,
      playerKey,
      slots,
    });
    this.lastAssertedPosition = lastAssertedPosition;
  }

  /* Getters */

  public getLastAssertedPosition(): Position | null {
    return this.lastAssertedPosition;
  }

  /* Methods */

  public toString(): string {
    const game = this.getGame();
    let boardString = "";
    for (
      let currentRowIndex = 0;
      currentRowIndex < game.getQuantityOfRows();
      currentRowIndex += INCREMENT_ONE
    ) {
      boardString += "|";
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < game.getQuantityOfColumns();
        currentColumnIndex += INCREMENT_ONE
      ) {
        boardString += " ";

        const position =
          currentRowIndex * game.getQuantityOfColumns() + currentColumnIndex;
        const slot: Slot = this.getSlot(position);

        if (slot === Slot.Empty) {
          boardString += "-";
        } else if (slot === Slot.X) {
          boardString += "X";
        } else {
          boardString += "O";
        }

        boardString += " |";
      }
      boardString += "\n";
    }
    return boardString;
  }
}
