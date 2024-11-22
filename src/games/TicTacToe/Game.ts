import { Scoreboard } from "src/engine/Game/State";
import { Integer } from "src/types";
import Game, { GameParams } from "../../engine/Game/Game";
import { moves, PlayerKey, players } from "./constants";
import { TicTacToeMove } from "./Move";
import { TicTacToePlayer } from "./Player";
import { TicTacToeState } from "./State";
import { Slot } from "./types";

const ADJUST_INDEX = 1;

enum GamePlayOutcome {
  Loss = -1,
  Draw = 0,
  Win = 1,
}

interface TicTacToeGameParams
  extends GameParams<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  > {
  readonly quantityOfRows: Integer;
  readonly quantityOfColumns: Integer;
}

export default class TicTacToeGame extends Game<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
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

  private areAllSlotsTheSame(values: Slot[]): boolean {
    const [firstValue] = values;
    if (typeof firstValue === "undefined") return false;
    return values.every(value => value === firstValue);
  }

  public getEndGameMessage(state: TicTacToeState): string {
    let message = `Game over! `;
    const winner = this.getWinner(state);

    if (winner === null) message += `It's a draw!`;
    else message += `${winner.getName()} wins!`;
    return message;
  }

  public getInitialState(): TicTacToeState {
    return new TicTacToeState({
      game: this,
      lastAssertedPosition: null,
      playerKey: PlayerKey.X,
      slots: Array<Slot>(this.getQuantityOfSlots()).fill(Slot.Empty),
    });
  }

  public getNextPlayerKey(playerKey: PlayerKey): PlayerKey {
    return playerKey === PlayerKey.X ? PlayerKey.O : PlayerKey.X;
  }

  private getPlayerKeyAtSlot(slot: Slot): PlayerKey | null {
    if (slot === Slot.Empty) return null;
    return slot === Slot.X ? PlayerKey.X : PlayerKey.O;
  }

  public getQuantityOfColumns(): Integer {
    return this.quantityOfColumns;
  }

  public getQuantityOfRows(): Integer {
    return this.quantityOfRows;
  }

  public getScoreboard(state: TicTacToeState): Scoreboard {
    const scoreboard: Scoreboard = new Map();
    const winnerKey = this.getWinnerKey(state);

    if (winnerKey !== null) {
      scoreboard.set(winnerKey, GamePlayOutcome.Win);
      scoreboard.set(this.getNextPlayerKey(winnerKey), GamePlayOutcome.Loss);
    }
    return scoreboard;
  }

  public getValidMoves(state: TicTacToeState): TicTacToeMove[] {
    const validMoves: TicTacToeMove[] = [];

    state.getSlots().forEach((slot: Slot, index: Integer) => {
      if (slot === Slot.Empty) {
        const rowIndex = Math.floor(index / this.quantityOfColumns);
        const columnIndex = index % this.quantityOfColumns;
        const moveIndex = rowIndex * this.quantityOfColumns + columnIndex;
        validMoves.push(this.getMove(moveIndex));
      }
    });
    return validMoves;
  }

  public getWinner(state: TicTacToeState): TicTacToePlayer | null {
    const winnerKey = this.getWinnerKey(state);
    if (winnerKey !== null) return this.getPlayer(winnerKey);
    return null;
  }

  private getWinnerKey(state: TicTacToeState): PlayerKey | null {
    if (state.lastAssertedPosition === null) return null;

    const slots = state.getSlots();
    const { rowIndex, columnIndex } = state.lastAssertedPosition;

    const row: Slot[] = slots.slice(
      rowIndex * this.quantityOfColumns,
      rowIndex * this.quantityOfColumns + this.quantityOfColumns,
    );
    if (this.areAllSlotsTheSame(row)) return this.getWinnerKeyOnSection(row);

    const column = slots.filter(
      (_, index) => index % this.quantityOfColumns === columnIndex,
    );
    if (this.areAllSlotsTheSame(column))
      return this.getWinnerKeyOnSection(column);

    const primaryDiagonal = slots.filter(
      (_, index) => index % this.quantityOfColumns === index,
    );
    if (this.areAllSlotsTheSame(primaryDiagonal))
      return this.getWinnerKeyOnSection(primaryDiagonal);

    const secondaryDiagonal = slots.filter(
      (_, index) =>
        Math.floor(index / this.quantityOfColumns) +
          (index % this.quantityOfColumns) ===
        this.quantityOfColumns - ADJUST_INDEX,
    );
    if (this.areAllSlotsTheSame(secondaryDiagonal))
      return this.getWinnerKeyOnSection(secondaryDiagonal);

    return null;
  }

  private getWinnerKeyOnSection(slots: Slot[]): PlayerKey | null {
    if (this.areAllSlotsTheSame(slots)) {
      const [firstSlot] = slots;
      if (typeof firstSlot !== "undefined") {
        return this.getPlayerKeyAtSlot(firstSlot);
      }
    }
    return null;
  }

  public isFinal(state: TicTacToeState): boolean {
    const winnerKey = this.getWinnerKey(state);
    if (winnerKey !== null) return true;

    if (state.getSlots().every((slot: Slot) => slot !== Slot.Empty))
      return true;

    return false;
  }
}
