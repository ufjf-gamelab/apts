import { Integer } from "src/types";
import Game, { GameParams } from "../../engine/Game/Game";
import { moves, PlayerKey, players } from "./constants";
import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";
import { TicTacToeState } from "./State";
import { Slot } from "./types";

const ADJUST_INDEX = 1;

interface TicTacToeGameParams
  extends GameParams<TicTacToePlayer, TicTacToeMove> {
  readonly quantityOfRows: Integer;
  readonly quantityOfColumns: Integer;
}

export default class TicTacToeGame extends Game<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState
> {
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    const quantityOfSlots: Integer = quantityOfColumns * quantityOfRows;
    super({
      moves,
      name: "Tic Tac Toe",
      players,
      quantityOfSlots,
    });

    this.quantityOfColumns = quantityOfColumns;
    this.quantityOfRows = quantityOfRows;
  }

  /* Getters */

  public getInitialState(): TicTacToeState {
    return new TicTacToeState({
      game: this,
      lastAssertedPosition: null,
      nextPlayerKey: PlayerKey.X,
      slots: Array<Slot>(this.getQuantityOfSlots()).fill(Slot.Empty),
    });
  }

  private areAllSlotsTheSame(values: Slot[]): boolean {
    const [firstValue] = values;
    if (typeof firstValue === "undefined") return false;
    return values.every(value => value === values[firstValue]);
  }

  private getWinnerOnStripe(slots: Slot[]): TicTacToePlayer | null {
    if (this.areAllSlotsTheSame(slots)) {
      const [firstSlot] = slots;
      if (typeof firstSlot !== "undefined") {
        const player = this.getPlayerAtSlot(firstSlot);
        if (player !== null) return player;
      }
    }
    return null;
  }

  private getPlayerAtSlot(slot: Slot): TicTacToePlayer | null {
    if (slot === Slot.Empty) return null;
    const playerKey = slot === Slot.X ? PlayerKey.X : PlayerKey.O;
    const player = this.getPlayer(playerKey);
    return player;
  }

  private getWinner(state: TicTacToeState): TicTacToePlayer | null {
    if (state.lastAssertedPosition === null) return null;

    const slots = state.getSlots();
    const { rowIndex, columnIndex } = state.lastAssertedPosition;

    const row: Slot[] = slots.slice(
      rowIndex * this.quantityOfColumns,
      rowIndex * this.quantityOfColumns + this.quantityOfColumns,
    );
    if (this.areAllSlotsTheSame(row)) return this.getWinnerOnStripe(row);

    const column = slots.filter(
      (_, index) => index % this.quantityOfColumns === columnIndex,
    );
    if (this.areAllSlotsTheSame(column)) return this.getWinnerOnStripe(column);

    const primaryDiagonal = slots.filter(
      (_, index) => index % this.quantityOfColumns === index,
    );
    if (this.areAllSlotsTheSame(primaryDiagonal))
      return this.getWinnerOnStripe(primaryDiagonal);

    const secondaryDiagonal = slots.filter(
      (_, index) =>
        Math.floor(index / this.quantityOfColumns) +
          (index % this.quantityOfColumns) ===
        this.quantityOfColumns - ADJUST_INDEX,
    );
    if (this.areAllSlotsTheSame(secondaryDiagonal))
      return this.getWinnerOnStripe(secondaryDiagonal);

    return null;
  }

  public isStateFinal(state: TicTacToeState): boolean {
    const winner = this.getWinner(state);
    if (winner !== null) return true;
    if (state.getSlots().every((slot: Slot) => slot !== Slot.Empty))
      return true;
    return false;
  }
}
