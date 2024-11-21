import Game, { ActionOutcome } from "../../engine/Game/Game";
import State from "../../engine/Game/State";
import { GameName } from "../../engine/types";
import { ConnectFourState } from "./State";

export default class ConnectFourGame extends Game {
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

  /* Getters */

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

  public getInitialState(): State<ConnectFourGame> {
    return new ConnectFourState(this, this.rowCount, this.columnCount);
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
