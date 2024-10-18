import { Outcome } from "src/engine/Game/Game";
import { INCREMENT_ONE } from "src/types";
import State, {
  EncodedState,
  Pixel,
  StateParams,
  TurnOutcome,
  ValidMove,
} from "../../engine/Game/State";
import TicTacToeGame from "./Game";
import { Channel, Move, Player, Slot } from "./types";

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
    lastPlayersPoints,
    slots,
  }: TicTacToeStateParams) {
    super({ game, lastPlayer, lastPlayersPoints, lastTakenMove, slots });
    this.quantityOfColumns = game.getQuantityOfColumns();
    this.quantityOfRows = game.getQuantityOfRows();
  }

  /* Getters */

  public getCurrentPlayer(): Player {
    const lastPlayer: Player | null = this.getLastPlayer();
    if (lastPlayer === null) return Player.X;
    if (lastPlayer === Player.X) return Player.O;
    return Player.X;
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
        const slot: Slot = this.getSlotAt(position);

        const channel = (() => {
          switch (slot) {
            case Slot.O:
              return Channel.O;
            case Slot.X:
              return Channel.X;
            default:
              return Channel.None;
          }
        })();

        State.setSlotInEncodedState({
          channel,
          columnIndex: currentColumnIndex,
          encodedState,
          rowIndex: currentRowIndex,
        });
      }
    }

    return encodedState;
  }

  public getTurnOutcome(): TurnOutcome {
    const winner = this.getWinner();
    
    if (winner !== null) {
      const points = new Map<Player, number>([
        [Player.X, Outcome.Loss],
        [Player.O, Outcome.Loss],
      ]);
      points.set(winner, Outcome.Win);
      return { gameHasEnded: true, points, winner };
    }

    const points = new Map<Player, number>([
      [Player.X, Outcome.Draw],
      [Player.O, Outcome.Draw],
    ]);

    const validMoves = this.getValidMoves();
    if (validMoves.every((validMove: boolean) => !validMove)) {
      return { gameHasEnded: true, points, winner: null };
    }

    return {
      gameHasEnded: false,
      points,
      winner: null,
    };
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

  public getWinner(): Player | null {
    const { lastTakenMove } = this;
    if (lastTakenMove === null) return null;
    const lastPlayerAsSlot: Slot =
      this.lastPlayer === Player.X ? Slot.X : Slot.O;
    const slots = this.getSlots();

    const rowIndex = Math.floor(lastTakenMove / this.quantityOfColumns);
    const columnIndex = lastTakenMove % this.quantityOfColumns;

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
        Math.floor(index / this.quantityOfColumns) +
          (index % this.quantityOfColumns) ===
        this.quantityOfColumns - ADJUST_INDEX,
    );

    // Won on the row
    if (row.every((slot: Slot) => slot === lastPlayerAsSlot))
      return this.lastPlayer;
    // Won on the column
    if (column.every((slot: Slot) => slot === lastPlayerAsSlot))
      return this.lastPlayer;
    // Won on the primary diagonal
    if (primaryDiagonal.every((slot: Slot) => slot === lastPlayerAsSlot))
      return this.lastPlayer;
    // Won on the secondary diagonal
    if (secondaryDiagonal.every((slot: Slot) => slot === lastPlayerAsSlot))
      return this.lastPlayer;
    // No win
    return null;
  }

  /* Methods */

  public changePerspective(player: Player): State<TicTacToeGame> {
    const currentPlayer = this.getCurrentPlayer();
    if (currentPlayer === player) return this.clone();

    const slots = this.getSlots();
    const newSlots = slots.map(slot => slot * INVERT_SLOTS);
    const newState = new TicTacToeState({
      game: this.game,
      lastPlayer: player,
      lastPlayersPoints: this.lastPlayersPoints,
      lastTakenMove: this.lastTakenMove,
      slots: newSlots,
    });
    return newState;
  }

  public clone(): State<TicTacToeGame> {
    const clonedState = new TicTacToeState({
      game: this.game,
      lastPlayer: this.lastPlayer,
      lastPlayersPoints: this.lastPlayersPoints,
      lastTakenMove: this.lastTakenMove,
      slots: this.getSlots(),
    });
    return clonedState;
  }

  public playMove(move: Move): State<TicTacToeGame> {
    const newSlots = this.getSlots();
    const currentPlayer = this.getCurrentPlayer();
    newSlots[move] = currentPlayer;
    const { points } = this.getTurnOutcome();

    const newState = new TicTacToeState({
      game: this.game,
      lastPlayer: currentPlayer,
      lastPlayersPoints: points,
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
}
