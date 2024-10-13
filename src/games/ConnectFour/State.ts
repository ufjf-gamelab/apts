/* eslint-disable max-statements */
import State, { EncodedState, Player, ValidAction } from "src/Game/State";
import ConnectFourGame from "./Game";

const MINIMUM_INDEX = 0;
const ADJUST_INDEX = 1;

export class ConnectFourState extends State {
  private readonly rowCount: number;
  private readonly columnCount: number;
  private table: Player[][];

  constructor(rowCount: number, columnCount: number) {
    super();
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.table = Array.from(Array(rowCount), () =>
      Array.from(Array(columnCount), () => Player.None),
    );
  }

  /* Getters */

  public getValidActions(): ValidAction[] {
    const validActions: ValidAction[] = [];
    for (let index = 0; index < this.columnCount; index++) {
      const [firstRow] = this.table;
      if (!firstRow) return [];
      const cell = firstRow[index];
      validActions.push(cell === Player.None);
    }
    return validActions;
  }

  public getPlayerAt(position: number): Player | null {
    const rowIndex = Math.floor(position / this.columnCount);
    const columnIndex = position % this.columnCount;
    const row = this.table[rowIndex];
    if (!row) return null;
    return row[columnIndex] ?? null;
  }

  public getEncodedState(): EncodedState {
    const encodedState: EncodedState = Array.from(Array(this.rowCount), () =>
      Array.from(Array(this.columnCount), () => [
        Player.None,
        Player.None,
        Player.None,
      ]),
    );
    for (let rowIndex = 0; rowIndex < this.rowCount; rowIndex++) {
      for (let columnIndex = 0; columnIndex < this.columnCount; columnIndex++) {
        const row = this.table[rowIndex];
        if (!row) continue;
        const player = row[columnIndex];
        if (!player) continue;
        ConnectFourState.setEncodedStatePosition({
          columnIndex,
          encodedState,
          player,
          rowIndex,
        });
      }
    }
    return encodedState;
  }

  /* Setters */

  private static setEncodedStatePosition({
    rowIndex,
    columnIndex,
    player,
    encodedState,
  }: {
    rowIndex: number;
    columnIndex: number;
    player: Player;
    encodedState: EncodedState;
  }) {
    const PLAYER_X_INDEX = 2;
    const PLAYER_O_INDEX = 0;
    const PLAYER_NONE_INDEX = 1;

    if (encodedState[rowIndex]?.[columnIndex]) {
      if (player === Player.X)
        encodedState[rowIndex][columnIndex][PLAYER_X_INDEX] = 1;
      else if (player === Player.O)
        encodedState[rowIndex][columnIndex][PLAYER_O_INDEX] = 1;
      else encodedState[rowIndex][columnIndex][PLAYER_NONE_INDEX] = 1;
    }
  }

  public setPlayerAt(player: Player, position: number): void {
    const rowIndex = Math.floor(position / this.columnCount);
    const columnIndex = position % this.columnCount;
    const row = this.table[rowIndex];
    if (!row) return;
    row[columnIndex] = player;
  }

  /// Methods
  public toString(): string {
    let boardString = "";
    for (const row of this.table) {
      boardString += ConnectFourState.formatRow(row);
    }
    return boardString;
  }

  private static formatRow(row: Player[]): string {
    let rowString = "|";
    for (const cell of row) {
      rowString += ` ${ConnectFourState.formatCell(cell)} |`;
    }
    rowString += "\n";
    return rowString;
  }

  private static formatCell(cell: Player): string {
    if (cell === Player.X) return "X";
    if (cell === Player.O) return "O";
    return "-";
  }

  public clone(): State {
    const clonedState = new ConnectFourState(this.rowCount, this.columnCount);
    clonedState.table = this.table.map(row => row.slice());
    return clonedState;
  }

  private checkWinOnRow(
    rowIndex: number,
    columnIndex: number,
    player: Player,
  ): boolean {
    const columnOfTheFirstWindow = Math.max(
      MINIMUM_INDEX,
      columnIndex - ConnectFourGame.WINDOW_SIZE + ADJUST_INDEX,
    );
    const columnOfTheLastWindow = Math.min(
      this.columnCount - ADJUST_INDEX,
      columnIndex + ConnectFourGame.WINDOW_SIZE - ADJUST_INDEX,
    );

    for (
      let currentColumnIndex = columnOfTheFirstWindow;
      currentColumnIndex < columnOfTheLastWindow - ConnectFourGame.WINDOW_SIZE;
      currentColumnIndex++
    ) {
      // For each window of X cells...
      const row = this.table[rowIndex];
      if (!row) return false;

      if (row[currentColumnIndex] === player) {
        let win = true;

        // Check if all the cells in the window are from the same player
        for (
          let playerIndex = 1;
          playerIndex < ConnectFourGame.WINDOW_SIZE;
          playerIndex++
        ) {
          if (row[currentColumnIndex + playerIndex] !== player) {
            win = false;
            break;
          }
        }

        if (win) return true;
      }
    }

    return false;
  }

  private checkWinOnColumn(
    rowIndex: number,
    columnIndex: number,
    player: Player,
  ): boolean {
    if (rowIndex > this.rowCount - ConnectFourGame.WINDOW_SIZE) return false;

    // Check if all the cells in the window are from the same player
    for (
      let currentRowIndex = rowIndex;
      currentRowIndex < rowIndex + ConnectFourGame.WINDOW_SIZE;
      currentRowIndex++
    ) {
      const row = this.table[currentRowIndex];
      if (!row) return false;

      if (row[columnIndex] !== player) return false;
    }
    return true;
  }

  private calculateIndexesForCheckingDiagonals(
    rowIndex: number,
    columnIndex: number,
  ): {
    firstWindowColumn: number;
    lastWindowColumn: number;
    correspondingInitialRow: number;
    correspondingFinalRow: number;
  } {
    let firstWindowColumn = Math.max(
      MINIMUM_INDEX,
      columnIndex - ConnectFourGame.WINDOW_SIZE + ADJUST_INDEX,
    );
    const xInitialOffset = columnIndex - firstWindowColumn;
    let correspondingInitialRow = rowIndex - xInitialOffset;
    if (correspondingInitialRow < MINIMUM_INDEX) {
      firstWindowColumn -= correspondingInitialRow;
      correspondingInitialRow = MINIMUM_INDEX;
    }

    let lastWindowColumn = Math.min(
      this.columnCount - ADJUST_INDEX,
      columnIndex + ConnectFourGame.WINDOW_SIZE - ADJUST_INDEX,
    );
    const xFinalOffset = lastWindowColumn - columnIndex;
    let correspondingFinalRow = rowIndex + xFinalOffset;
    if (correspondingFinalRow >= this.rowCount) {
      lastWindowColumn -= correspondingFinalRow - this.rowCount + ADJUST_INDEX;
      correspondingFinalRow = this.rowCount - ADJUST_INDEX;
    }

    return {
      correspondingFinalRow,
      correspondingInitialRow,
      firstWindowColumn,
      lastWindowColumn,
    };
  }

  private checkWinOnDiagonal({
    direction,
    rowIndex,
    columnIndex,
    player,
  }: {
    direction: "primary" | "secondary";
    rowIndex: number;
    columnIndex: number;
    player: Player;
  }) {
    const indexes = this.calculateIndexesForCheckingDiagonals(
      rowIndex,
      columnIndex,
    );
    const { firstWindowColumn, lastWindowColumn, correspondingFinalRow } =
      indexes;
    let { correspondingInitialRow } = indexes;

    if (
      correspondingFinalRow - correspondingInitialRow <
      ConnectFourGame.WINDOW_SIZE - ADJUST_INDEX
    )
      return false;
    for (
      let currentColumnIndex = firstWindowColumn;
      currentColumnIndex <=
      lastWindowColumn - ConnectFourGame.WINDOW_SIZE + ADJUST_INDEX;
      currentColumnIndex++
    ) {
      // For each window of X cells...
      const row = this.table[correspondingInitialRow];
      if (!row) return false;

      if (row[currentColumnIndex] === player) {
        let win = true;

        // Check if all the cells in the window are from the same player
        for (
          let playerIndex = 1;
          playerIndex < ConnectFourGame.WINDOW_SIZE;
          playerIndex++
        ) {
          const currentRow = this.table[correspondingInitialRow + playerIndex];
          if (!currentRow) return false;

          const currentCell =
            currentRow[
              direction === "primary"
                ? currentColumnIndex + playerIndex
                : currentColumnIndex - playerIndex
            ];
          if (currentCell !== player) {
            win = false;
            break;
          }
        }
        if (win) return true;
      }
      correspondingInitialRow++;
    }
    return false;
  }

  public checkWin(action: number): boolean {
    // Get who played the action, and its position
    const columnIndex = action;
    let rowIndex = -ADJUST_INDEX;
    for (
      let currentRowIndex = this.rowCount - ADJUST_INDEX;
      currentRowIndex >= MINIMUM_INDEX;
      currentRowIndex--
    ) {
      const row = this.table[currentRowIndex];
      if (!row) return false;
      if (row[columnIndex] === Player.None) {
        rowIndex = currentRowIndex;
        break;
      }
    }

    // The row where the action was played
    rowIndex += ADJUST_INDEX;
    if (rowIndex > this.rowCount - ADJUST_INDEX) return false;
    const row = this.table[rowIndex];
    if (!row) return false;
    const player = row[columnIndex];
    if (!player) return false;

    if (this.checkWinOnColumn(rowIndex, columnIndex, player)) return true;
    if (this.checkWinOnRow(rowIndex, columnIndex, player)) return true;
    if (
      this.checkWinOnDiagonal({
        columnIndex,
        direction: "primary",
        player,
        rowIndex,
      })
    )
      return true;
    if (
      this.checkWinOnDiagonal({
        columnIndex,
        direction: "secondary",
        player,
        rowIndex,
      })
    )
      return true;
    // No win
    return false;
  }

  public performAction(action: number, player: Player): void {
    const columnIndex = action;
    let rowIndex = -ADJUST_INDEX;
    for (
      let currentRowIndex = this.rowCount - ADJUST_INDEX;
      currentRowIndex >= MINIMUM_INDEX;
      currentRowIndex--
    ) {
      const row = this.table[currentRowIndex];
      if (!row) return;
      if (row[columnIndex] === Player.None) {
        // The row where the action will be played
        rowIndex = currentRowIndex;
        break;
      }
    }
    // Play the action on the given state
    const row = this.table[rowIndex];
    if (!row) return;
    if (rowIndex !== -ADJUST_INDEX) row[columnIndex] = player;
  }

  /// Static methods
  public changePerspective(
    currentPlayer: Player,
    opponentPlayer: Player,
  ): void {
    for (
      let currentRowIndex = MINIMUM_INDEX;
      currentRowIndex < this.rowCount;
      currentRowIndex++
    ) {
      for (
        let currentColumnIndex = MINIMUM_INDEX;
        currentColumnIndex < this.columnCount;
        currentColumnIndex++
      ) {
        const row = this.table[currentRowIndex];
        if (!row) return;
        const cell = row[currentColumnIndex];
        if (cell === currentPlayer) row[currentColumnIndex] = opponentPlayer;
        else if (cell === opponentPlayer)
          row[currentColumnIndex] = currentPlayer;
      }
    }
  }
}
