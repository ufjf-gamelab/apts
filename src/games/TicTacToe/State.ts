import { Integer } from "src/types";
import State, { Scoreboard, StateParams } from "../../engine/Game/State";
import { PlayerKey } from "./constants";
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
    scoreboard,
    lastAssertedPosition,
  }: TicTacToeStateParams) {
    super({
      game,
      playerKey,
      scoreboard,
      slots,
    });
    this.lastAssertedPosition = lastAssertedPosition;
  }

  /* Getters */

  public getScoreboard(): Scoreboard {
    const scoreboard: Scoreboard = {
      [PlayerKey.X]: 0,
      [PlayerKey.O]: 0,
    };

    const winner = this.getGame().getWinner(this);
    if (winner !== null) {
      scoreboard[winner] = 1;
    }
    return scoreboard;
  }

  public getLastAssertedPosition(): Position | null {
    return this.lastAssertedPosition;
  }

  public getValidMoves(): TicTacToeMove[] {
    const game = this.getGame();
    const quantityOfColumns = game.getQuantityOfColumns();
    const validMoves: TicTacToeMove[] = [];

    this.getSlots().forEach((slot: Slot, index: Integer) => {
      if (slot === Slot.Empty) {
        const rowIndex = Math.floor(index / quantityOfColumns);
        const columnIndex = index % quantityOfColumns;
        const moveIndex = rowIndex * quantityOfColumns + columnIndex;
        validMoves.push(game.getMove(moveIndex));
      }
    });
    return validMoves;
  }

  public isFinal(): boolean {
    const winner = this.getGame().getWinner(this);
    if (winner !== null) return true;
    if (this.getSlots().every((slot: Slot) => slot !== Slot.Empty)) return true;
    return false;
  }

  /* Methods */

  public toString(): string {
    return `TicTacToeState`;
  }
}
