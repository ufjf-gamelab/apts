import { INCREMENT_ONE } from "src/types";
import State, {
  EncodedState,
  Pixel,
  StateParams,
  ValidMove,
} from "../../engine/Game/State";
import TicTacToeGame from "./Game";

export enum Player {
  X = 1,
  O = -1,
}

export enum Slot {
  Empty = 0,
  X = Player.X,
  O = Player.O,
}

enum Channel {
  O = 0,
  None = 1,
  X = 2,
}

export enum Move {
  Northwest = 0,
  North = 1,
  Northeast = 2,
  West = 3,
  Center = 4,
  East = 5,
  Southwest = 6,
  South = 7,
  Southeast = 8,
}

const ADJUST_INDEX = 1;
const INVERT_SLOTS = -1;

type TicTacToeStateParams = StateParams<TicTacToeGame>;

export class TicTacToeState extends State<TicTacToeGame> {
  private readonly quantityOfColumns: TicTacToeGame["quantityOfColumns"];
  private readonly quantityOfRows: TicTacToeGame["quantityOfRows"];

  constructor({
    game,
    lastPlayer,
    lastTakenMove,
    slots,
  }: TicTacToeStateParams) {
    super({ game, lastPlayer, lastTakenMove, slots });
    this.quantityOfColumns = game.getQuantityOfColumns();
    this.quantityOfRows = game.getQuantityOfRows();
  }

  /* Getters */

  public getCurrentPlayer(): Player {
    if (this.lastPlayer === null) return Player.X;
    else if (this.lastPlayer === Player.X) return Player.O;
    else return Player.X;
  }

  public getEncodedState(): Pixel[][][] {
    const encodedState: EncodedState = Array.from(
      Array(this.quantityOfRows),
      () =>
        Array.from(Array(this.quantityOfColumns), () =>
          Array<Pixel>(this.quantityOfColumns).fill(Pixel.Off),
        ),
    );

    for (
      let currentRowIndex = 0;
      currentRowIndex < this.quantityOfRows;
      currentRowIndex += INCREMENT_ONE
    ) {
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < this.quantityOfColumns;
        currentColumnIndex += INCREMENT_ONE
      ) {
        const position =
          currentRowIndex * this.quantityOfColumns + currentColumnIndex;

        const player = this.getSlotAt(position);

        this.setPositionInEncodedState({
          columnIndex: currentColumnIndex,
          encodedState,
          player,
          rowIndex: currentRowIndex,
        });
      }
    }

    return encodedState;
  }

  public getValidMoves(): ValidMove[] {
    const validMoves: ValidMove[] = [];

    for (
      let currentRowIndex = 0;
      currentRowIndex < this.quantityOfRows;
      currentRowIndex += INCREMENT_ONE
    ) {
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < this.quantityOfColumns;
        currentColumnIndex += INCREMENT_ONE
      ) {
        const position =
          currentRowIndex * this.quantityOfColumns + currentColumnIndex;
        const slot: Slot = this.getSlotAt(position);

        // If the cell is empty, it is a valid move
        validMoves.push(slot === Slot.Empty);
      }
    }

    return validMoves;
  }

  public getWinner(move: Move): Player | null {
    const currentPlayer = this.getCurrentPlayer();
    const currentPlayerAsSlot: Slot =
      currentPlayer === Player.X ? Slot.X : Slot.O;
    const newState = this.playMove(move);
    const slots = newState.getSlots();

    const rowIndex = Math.floor(move / this.quantityOfColumns);
    const columnIndex = move % this.quantityOfColumns;

    const row = slots.slice(
      rowIndex * this.quantityOfColumns,
      rowIndex * this.quantityOfColumns + this.quantityOfColumns,
    );
    const column = slots.filter(
      (_, index) => index % this.quantityOfColumns === columnIndex,
    );
    const primaryDiagonal = slots.filter(
      (_, index) => index % this.quantityOfColumns === index,
    );
    const secondaryDiagonal = slots.filter(
      (_, index) =>
        index % this.quantityOfColumns ===
        this.quantityOfColumns - ADJUST_INDEX - index,
    );

    // Won on the row
    if (row.every((slot: Slot) => slot === currentPlayerAsSlot))
      return currentPlayer;
    // Won on the column
    if (column.every((slot: Slot) => slot === currentPlayerAsSlot))
      return currentPlayer;
    // Won on the primary diagonal
    if (primaryDiagonal.every((slot: Slot) => slot === currentPlayerAsSlot))
      return currentPlayer;
    // Won on the secondary diagonal
    if (secondaryDiagonal.every((slot: Slot) => slot === currentPlayerAsSlot))
      return currentPlayer;
    // No win
    return null;
  }

  /* Setters */

  public setPositionInEncodedState({
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
    if (encodedState[rowIndex]?.[columnIndex]) {
      if (player === Player.X)
        encodedState[rowIndex][columnIndex][Channel.X] = 1;
      else if (player === Player.O)
        encodedState[rowIndex][columnIndex][Channel.O] = 1;
      else encodedState[rowIndex][columnIndex][Channel.None] = 1;
    }
  }

  /* Methods */

  public clone(): TicTacToeState {
    const clonedState = new TicTacToeState({
      game: this.game,
      lastPlayer: this.lastPlayer,
      lastTakenMove: this.lastTakenMove,
      slots: this.getSlots(),
    });
    return clonedState;
  }

  public playMove(move: Move): State<TicTacToeGame> {
    const newSlots = this.getSlots();
    const currentPlayer = this.getCurrentPlayer();
    newSlots[move] = currentPlayer;
    const newState = new TicTacToeState({
      game: this.game,
      lastPlayer: currentPlayer,
      lastTakenMove: move,
      slots: newSlots,
    });
    return newState;
  }

  public toString() {
    let boardString = "";
    for (
      let currentRowIndex = 0;
      currentRowIndex < this.quantityOfRows;
      currentRowIndex += INCREMENT_ONE
    ) {
      boardString += "|";
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < this.quantityOfColumns;
        currentColumnIndex += INCREMENT_ONE
      ) {
        boardString += " ";
        const position =
          currentRowIndex * this.quantityOfColumns + currentColumnIndex;
        const slot: Slot = this.getSlotAt(position);

        if (slot === Slot.Empty) boardString += "-";
        else {
          const playerData = this.game.getPlayerData(slot);
          boardString += playerData.symbol;
        }

        boardString += " |";
      }
      boardString += "\n";
    }
    return boardString;
  }

  /* Static methods */

  public changePerspective(player: Player) {
    const currentPlayer = this.getCurrentPlayer();
    if (currentPlayer === player) return this.clone();

    const slots = this.getSlots();
    const newSlots = slots.map(slot => slot * INVERT_SLOTS);
    const newState = new TicTacToeState({
      game: this.game,
      lastPlayer: player,
      lastTakenMove: this.lastTakenMove,
      slots: newSlots,
    });
    return newState;
  }
}
