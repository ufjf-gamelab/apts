/* eslint-disable class-methods-use-this */
import Game, { ActionOutcome } from "src/Game/Game";
import State, { Player } from "src/Game/State";
import { GameName } from "src/types";
import { ConnectFourState } from "./State";

export default class ConnectFourGame extends Game {
  /// Attributes
  public static readonly WINDOW_SIZE = 4;
  private readonly rowCount: number;
  private readonly columnCount: number;
  private readonly actionSize: number;

  constructor(rowCount: number, columnCount: number) {
    if (
      rowCount < ConnectFourGame.WINDOW_SIZE ||
      columnCount < ConnectFourGame.WINDOW_SIZE
    )
      throw new Error(
        `The board must be at least ${ConnectFourGame.WINDOW_SIZE}x${ConnectFourGame.WINDOW_SIZE}`,
      );
    super();
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.actionSize = columnCount;
  }

  /// Getters
  public getName(): GameName {
    return GameName.ConnectFour;
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
    return new ConnectFourState(this.rowCount, this.columnCount);
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
