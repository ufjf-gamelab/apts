import { PlayerKey } from "@repo/engine/engine/Game/Player.js";
import State, { StateParams } from "@repo/engine/engine/Game/State.js";
import { INCREMENT_ONE, Integer } from "@repo/engine/types";
import TicTacToeGame from "./Game";
import { Position, TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";
import { Slot } from "./types";

export const INITIAL_POINTS: Integer = 0;

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
  private readonly lastAssertedPosition: TicTacToeStateParams["lastAssertedPosition"];

  constructor({
    game,
    slots,
    playerKey,
    score,
    validMovesKeys,
    lastAssertedPosition,
  }: TicTacToeStateParams) {
    super({
      game,
      playerKey,
      score,
      slots,
      validMovesKeys,
    });
    this.lastAssertedPosition = lastAssertedPosition;
  }

  /* Getters */

  public getLastAssertedPosition(): Position | null {
    return this.lastAssertedPosition;
  }

  /* Methods */

  public changePerspective(playerKey: PlayerKey): TicTacToeState {
    return new TicTacToeState({
      game: this.getGame(),
      lastAssertedPosition: this.lastAssertedPosition,
      playerKey,
      score: this.getScore(),
      slots: this.getSlots(),
      validMovesKeys: this.getValidMovesKeys(),
    });
  }

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
