import Game from "@repo/engine/Game/Game.js";
import type { PlayerPair } from "@repo/engine/Game/Player.js";
import type { Integer } from "@repo/engine/types";

import type { Position } from "./Move.js";
import type TicTacToeMove from "./Move.js";
import type TicTacToePlayer from "./Player.js";
import TicTacToeState, { INITIAL_POINTS } from "./State.js";
import { moves, PlayerKey, players, Slot } from "./types.js";

const ADJUST_INDEX = 1;

interface TicTacToeGameParams {
  readonly quantityOfColumns: Integer;
  readonly quantityOfRows: Integer;
}

export default class TicTacToeGame extends Game<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
> {
  private readonly quantityOfColumns: TicTacToeGameParams["quantityOfColumns"];
  private readonly quantityOfRows: TicTacToeGameParams["quantityOfRows"];

  constructor({ quantityOfColumns, quantityOfRows }: TicTacToeGameParams) {
    super({
      moves,
      name: "Tic Tac Toe",
      players,
      quantityOfSlots: quantityOfColumns * quantityOfRows,
    });

    this.quantityOfColumns = quantityOfColumns;
    this.quantityOfRows = quantityOfRows;
  }

  /* Getters */

  public getEndOfGameMessage(state: TicTacToeState): string {
    let message = `Game over! `;
    const lastAssertedPosition = state.getLastAssertedPosition();

    const winner =
      lastAssertedPosition === null
        ? null
        : this.getWinner(state.getSlots(), lastAssertedPosition);

    if (winner === null) {
      message += `It's a draw!`;
    } else {
      message += `${winner.player.getName()} wins!`;
    }
    return message;
  }

  public getInitialState(): TicTacToeState {
    return new TicTacToeState({
      game: this,
      lastAssertedPosition: null,
      playerKey: PlayerKey.X,
      score: [INITIAL_POINTS, INITIAL_POINTS],
      slots: Array<Slot>(this.getQuantityOfSlots()).fill(Slot.Empty),
      validMovesKeys: this.getMoves().map((_, index) => index),
    });
  }

  public getNextPlayerKey(playerKey: PlayerKey): PlayerKey {
    return playerKey === PlayerKey.X ? PlayerKey.O : PlayerKey.X;
  }

  public getQuantityOfColumns(): Integer {
    return this.quantityOfColumns;
  }

  public getQuantityOfRows(): Integer {
    return this.quantityOfRows;
  }

  public getWinner(
    slots: Slot[],
    lastAssertedPosition: Position,
  ): null | PlayerPair {
    const { indexOfColumn, indexOfRow } = lastAssertedPosition;

    const row: Slot[] = slots.slice(
      indexOfRow * this.quantityOfColumns,
      indexOfRow * this.quantityOfColumns + this.quantityOfColumns,
    );
    let winner = this.getWinnerOnSection(row);
    if (winner !== null) {
      return winner;
    }

    const column = slots.filter(
      (_, index) => index % this.quantityOfColumns === indexOfColumn,
    );
    winner = this.getWinnerOnSection(column);
    if (winner !== null) {
      return winner;
    }

    const primaryDiagonal = slots.filter(
      (_, index) => index % this.quantityOfColumns === index,
    );
    winner = this.getWinnerOnSection(primaryDiagonal);
    if (winner !== null) {
      return winner;
    }

    const secondaryDiagonal = slots.filter(
      (_, index) =>
        Math.floor(index / this.quantityOfColumns) +
          (index % this.quantityOfColumns) ===
        this.quantityOfColumns - ADJUST_INDEX,
    );
    winner = this.getWinnerOnSection(secondaryDiagonal);
    if (winner !== null) {
      return winner;
    }

    return null;
  }

  private getPlayerAtSlot(slot: Slot): null | PlayerPair {
    if (slot === Slot.Empty) {
      return null;
    }
    const playerKey = slot === Slot.X ? PlayerKey.X : PlayerKey.O;
    const player = this.getPlayer(playerKey);
    return { key: playerKey, player };
  }

  private getWinnerOnSection(slots: Slot[]): null | PlayerPair {
    const [firstSlot] = slots;
    if (typeof firstSlot !== "undefined") {
      const allSlotsAreTheSame = slots.every(slot => slot === firstSlot);
      if (allSlotsAreTheSame) {
        return this.getPlayerAtSlot(firstSlot);
      }
    }
    return null;
  }
}
