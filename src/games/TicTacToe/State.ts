import { INCREMENT_ONE, Integer } from "src/types";
import State, {
  EncodedState,
  Pixel,
  Position,
  StateParams,
} from "../../engine/Game/State";
import TicTacToeGame from "./Game";
import { TicTacToeMove } from "./Move";
import { Channel, Player, Slot } from "./types";

const ADJUST_INDEX = 1;
const INVERT_SLOTS = -1;

interface TicTacToeStateParams
  extends StateParams<TicTacToeGame, TicTacToeMove> {
  lastAssertedPosition: Position | null;
}

export class TicTacToeState extends State<TicTacToeGame, TicTacToeMove> {
  private lastAssertedPosition: TicTacToeStateParams["lastAssertedPosition"];

  constructor({
    game,
    player,
    scoreboard,
    slots,
    lastAssertedPosition,
  }: TicTacToeStateParams) {
    super({ game, player, scoreboard, slots });
    this.lastAssertedPosition = lastAssertedPosition;
  }

  /* Getters */

  public getEncodedState() {
    const encodedState: EncodedState = Array.from(
      Array(this.getQuantityOfRows()),
      () =>
        Array.from(Array(this.getQuantityOfColumns()), () =>
          Array<Pixel>(this.getQuantityOfColumns()).fill(Pixel.Off),
        ),
    );

    for (
      let currentRowIndex = 0;
      currentRowIndex < this.getQuantityOfRows();
      currentRowIndex += INCREMENT_ONE
    ) {
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < this.getQuantityOfColumns();
        currentColumnIndex += INCREMENT_ONE
      ) {
        const position =
          currentRowIndex * this.getQuantityOfColumns() + currentColumnIndex;
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

  public getLastAssertedPosition(): Position | null {
    return this.lastAssertedPosition;
  }

  private getOpponent(): Player {
    const player: Player = this.getPlayer();
    return player === Player.X ? Player.O : Player.X;
  }

  private getQuantityOfColumns() {
    return this.getGame().getQuantityOfColumns();
  }

  private getQuantityOfRows() {
    return this.getGame().getQuantityOfRows();
  }

  public hasThePlayerWon(rowIndex: Integer, columnIndex: Integer): boolean {
    const player: Player = this.getPlayer();
    const playerAsSlot: Slot = player === Player.X ? Slot.X : Slot.O;
    const slots = this.getSlots();

    const row = slots.slice(
      rowIndex * this.getQuantityOfColumns(),
      rowIndex * this.getQuantityOfColumns() + this.getQuantityOfColumns(),
    );
    const column = slots.filter(
      (_, index) => index % this.getQuantityOfColumns() === columnIndex,
    );
    const primaryDiagonal = slots.filter(
      (_, index) => index % this.getQuantityOfColumns() === index,
    );
    const secondaryDiagonal = slots.filter(
      (_, index) =>
        Math.floor(index / this.getQuantityOfColumns()) +
          (index % this.getQuantityOfColumns()) ===
        this.getQuantityOfColumns() - ADJUST_INDEX,
    );

    // Won on the row
    if (row.every((slot: Slot) => slot === playerAsSlot)) return true;
    // Won on the column
    if (column.every((slot: Slot) => slot === playerAsSlot)) return true;
    // Won on the primary diagonal
    if (primaryDiagonal.every((slot: Slot) => slot === playerAsSlot))
      return true;
    // Won on the secondary diagonal
    if (secondaryDiagonal.every((slot: Slot) => slot === playerAsSlot))
      return true;
    // No win
    return false;
  }

  /* Methods */

  public changePerspective(
    player: Player,
  ): State<TicTacToeGame, TicTacToeMove> {
    const currentPlayer: Player = this.getPlayer();
    if (currentPlayer === player) return this.clone();

    const newSlots = this.getSlots().map(slot => slot * INVERT_SLOTS);

    const newState = new TicTacToeState({
      game: this.getGame(),
      lastAssertedPosition: this.lastAssertedPosition,
      player,
      scoreboard: this.getScoreboard(),
      slots: newSlots,
    });
    return newState;
  }

  public clone(): State<TicTacToeGame, TicTacToeMove> {
    const clonedState = new TicTacToeState({
      game: this.getGame(),
      lastAssertedPosition: this.lastAssertedPosition,
      player: this.getPlayer(),
      scoreboard: this.getScoreboard(),
      slots: this.getSlots(),
    });
    return clonedState;
  }

  // public playMove(move: TicTacToeMove): State<TicTacToeGame, TicTacToeMove> {
  //   const newSlots = this.getSlots().slice();
  //   const position = move.getPosition();
  //   newSlots[position] = this.getPlayer();

  //   // const { scoreboard } = this.getTurnOutcome();

  //   const nextState = new TicTacToeState({
  //     game: this.getGame(),
  //     keysOfTheValidMoves: this.getKeysOfTheValidMovesForTheNextState(),
  //     lastAssertedPosition: position,
  //     player: this.getOpponent(),
  //     scoreboard,
  //     slots: newSlots,
  //   });
  //   return nextState;
  // }

  public toString() {
    let boardString = "";
    for (
      let currentRowIndex = 0;
      currentRowIndex < this.getQuantityOfRows();
      currentRowIndex += INCREMENT_ONE
    ) {
      boardString += "|";
      for (
        let currentColumnIndex = 0;
        currentColumnIndex < this.getQuantityOfColumns();
        currentColumnIndex += INCREMENT_ONE
      ) {
        boardString += " ";
        const position =
          currentRowIndex * this.getQuantityOfColumns() + currentColumnIndex;
        const slot: Slot = this.getSlotAt(position);

        if (slot === Slot.Empty) boardString += "-";
        else {
          const playerData = this.getGame().getPlayerData(slot);
          boardString += playerData.symbol;
        }

        boardString += " |";
      }
      boardString += "\n";
    }
    return boardString;
  }
}
