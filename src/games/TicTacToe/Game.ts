/* eslint-disable class-methods-use-this */
import Game, { ActionOutcome } from "../../engine/Game/Game";
import State, { Player } from "../../engine/Game/State";
import { GameName } from "../../engine/types";
import { TicTacToeState } from "./State";

export default class TicTacToeGame extends Game {
  /// Attributes
  private readonly rowCount: number;
  private readonly columnCount: number;
  private readonly actionSize: number;

  constructor(rowCount: number, columnCount: number) {
    super();
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.actionSize = rowCount * columnCount;
  }

  /// Getters
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

  public getInitialState(): State {
    return new TicTacToeState(this.rowCount, this.columnCount);
  }

  public getPlayerName(player: Player): string {
    if (player === Player.None) return "N";
    return player === Player.X ? "X" : "O";
  }

  public getOpponent(player: Player): Player {
    if (player === Player.None) return Player.None;
    return player === Player.X ? Player.O : Player.X;
  }

  // Return the outcome value, considering that the opponent is the one playing
  public getOpponentValue(
    value: ActionOutcome["value"],
  ): ActionOutcome["value"] {
    return -value;
  }
}
