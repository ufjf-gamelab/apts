import type { PlayerKey } from "../../../game.old/src/Player.js";
import type { StateParams } from "../../../game.old/src/State.js";
import State from "../../../game.old/src/State.js";
import type { Integer } from "@repo/engine_game/types";
import { INCREMENT_ONE } from "@repo/engine_game/types";

import type TicTacToeGame from "./Game.js";
import type { Position } from "./Move.js";
import type TicTacToeMove from "./Move.js";
import type TicTacToePlayer from "./Player.js";
import { Slot } from "./types.js";

export const INITIAL_POINTS: Integer = 0;

interface TicTacToeStateParams
  extends StateParams<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  > {
  readonly lastAssertedPosition: null | Position;
}

export default class TicTacToeState extends State<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
> {
  private readonly lastAssertedPosition: TicTacToeStateParams["lastAssertedPosition"];

  constructor({
    game,
    lastAssertedPosition,
    playerKey,
    score,
    slots,
    validMovesKeys,
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

  /* Methods */

  public getLastAssertedPosition(): null | Position {
    return this.lastAssertedPosition;
  }

  public toString(): string {
    const game = this.getGame();
    let boardString = "";
    for (
      let currentindexOfRow = 0;
      currentindexOfRow < game.getQuantityOfRows();
      currentindexOfRow += INCREMENT_ONE
    ) {
      boardString += "|";
      for (
        let currentindexOfColumn = 0;
        currentindexOfColumn < game.getQuantityOfColumns();
        currentindexOfColumn += INCREMENT_ONE
      ) {
        boardString += " ";

        const position =
          currentindexOfRow * game.getQuantityOfColumns() +
          currentindexOfColumn;
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
