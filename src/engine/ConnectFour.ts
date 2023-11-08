import Game, {ActionOutcome, Player, State, ValidAction} from './Game.js';

export default class ConnectFourGame extends Game {
	public static WINDOW_SIZE = 4;

	constructor(rowCount: number, columnCount: number, actionSize: number) {
		if (
			rowCount < ConnectFourGame.WINDOW_SIZE ||
			columnCount < ConnectFourGame.WINDOW_SIZE
		)
			throw new Error(
				`The board must be at least ${ConnectFourGame.WINDOW_SIZE}x${ConnectFourGame.WINDOW_SIZE}`,
			);
		super(rowCount, columnCount, actionSize);
	}

	/// Getters
	public getInitialState(): State {
		return new ConnectFourState(this.rowCount, this.columnCount);
	}

	public getOpponent(player: Player): Player {
		if (player === Player.None) return Player.None;
		return player === Player.X ? Player.O : Player.X;
	}

	// Return the outcome value, considering that the opponent is the one playing
	public getOpponentValue(
		value: ActionOutcome['value'],
	): ActionOutcome['value'] {
		return Math.abs(-value);
	}
}

export class ConnectFourState extends State {
	constructor(rowCount: number, columnCount: number) {
		super(rowCount, columnCount);
	}

	/// Getters
	public getValidActions(): Array<ValidAction> {
		const validActions: Array<ValidAction> = [];
		for (let i = 0; i < this.columnCount; i++) {
			const cell = this.table[0]![i];
			validActions.push(cell === Player.None);
		}
		return validActions;
	}

	/// Methods
	public print(): void {
		let boardString = '';
		for (let i = 0; i < this.table.length; i++) {
			boardString += '|';
			for (let j = 0; j < this.table[i].length; j++) {
				const cell = this.table[i][j];
				boardString += ' ';
				if (cell === Player.X) boardString += 'X';
				else if (cell === Player.O) boardString += 'O';
				else boardString += '-';
				boardString += ' |';
			}
			boardString += '\n';
		}
		console.log(boardString);
	}

	private checkWinOnRow(row: number, column: number, player: Player): boolean {
		for (
			let j = Math.max(0, column - ConnectFourGame.WINDOW_SIZE - 1);
			j <= Math.min(column, ConnectFourGame.WINDOW_SIZE - 1);
			j++
		) {
			// For each window of X cells...
			if (this.table[row]![j] === player) {
				let win = true;
				// Check if all the cells in the window are from the same player
				for (let k = 1; k < ConnectFourGame.WINDOW_SIZE; k++) {
					if (this.table[row]![j + k] !== player) {
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
		row: number,
		column: number,
		player: Player,
	): boolean {
		if (row > this.rowCount - ConnectFourGame.WINDOW_SIZE) return false;
		// Check if all the cells in the window are from the same player
		for (let i = row; i < row + ConnectFourGame.WINDOW_SIZE; i++) {
			if (this.table[i]![column] !== player) return false;
		}
		return true;
	}

	public checkWin(action: number): boolean {
		// Get who played the action, and its position
		const column = action;
		let row = -1;
		for (let i = this.rowCount - 1; i >= 0; i--) {
			if (this.table[i]![column] === Player.None) {
				row = i;
				break;
			}
		}
		row = row + 1; // The row where the action was played
		const player = this.table[row]![column];

		if (this.checkWinOnColumn(row, column, player)) return true;
		if (this.checkWinOnRow(row, column, player)) return true;
		// Won on the primary diagonal
		// if (this.table.every((row, i) => row[i] === player)) return true;
		// // Won on the secondary diagonal
		// if (this.table.every((row, i) => row[this.columnCount - 1 - i] === player))
		// return true;
		// No win
		return false;
	}

	public performAction(action: number, player: Player): void {
		const column = action;
		let row = -1;
		for (let i = this.rowCount - 1; i >= 0; i--) {
			if (this.table[i]![column] === Player.None) {
				row = i; // The row where the action will be played
				break;
			}
		}
		// Play the action on the given state
		if (row !== -1) this.table[row][column] = player;
	}
}
