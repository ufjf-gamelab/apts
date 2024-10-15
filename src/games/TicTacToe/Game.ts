import Game, { ActionOutcome } from "../../engine/Game/Game";
import State from "../../engine/Game/State";
import { GameName } from "../../engine/types";
import { TicTacToeState } from "./State";

export enum Player {
  None = 0,
  X = 1,
  O = -1,
}

export default class TicTacToeGame extends Game {
  private readonly rowCount: number;
  private readonly columnCount: number;
  private readonly actionSize: number;

  constructor(rowCount: number, columnCount: number) {
    super();
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.actionSize = rowCount * columnCount;
  }

  /* Getters */

  public getName(): GameName {
    return GameName.TicTacToe;
  }

  public getRowCount(): number {
    return this.rowCount;
  }

  public getColumnCount(): number {
    return this.columnCount;
  }

  public getActionSize(): number {
    return this.actionSize;
  }

  public getInitialState(): State<TicTacToeGame> {
    return new TicTacToeState(this, this.rowCount, this.columnCount);
  }

  public getInitialPlayer(): Player {
    return Player.X;
  }

  public getPlayerName(player: Player): string {
    if (player === Player.None) return "N";
    return player === Player.X ? "X" : "O";
  }

  public getOpponent(player: Player): Player {
    if (player === Player.None) return Player.None;
    return player === Player.X ? Player.O : Player.X;
  }

  /// Return the outcome value, considering that the opponent is the one playing.
  public getOpponentValue(
    value: ActionOutcome["value"],
  ): ActionOutcome["value"] {
    return -value;
  }
}
