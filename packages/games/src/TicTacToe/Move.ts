import type { MovePair, MoveParams } from "@repo/engine/Game/Move.js";
import Move from "@repo/engine/Game/Move.js";
import type { Score } from "@repo/engine/Game/State.js";
import type { Integer } from "@repo/engine/types";

import type TicTacToeGame from "./Game.js";
import type { TicTacToePlayerPair } from "./Player.js";
import type TicTacToePlayer from "./Player.js";
import TicTacToeState, { INITIAL_POINTS } from "./State.js";
import { PlayerKey, Slot } from "./types.js";

const INCREMENT_ONE_POINT = 1;

export interface Position {
  readonly indexOfColumn: Integer;
  readonly indexOfRow: Integer;
}

export type TicTacToeMovePair = MovePair<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
>;

export interface TicTacToeMoveParams
  extends MoveParams<
    TicTacToePlayer,
    TicTacToeMove,
    TicTacToeState,
    TicTacToeGame
  > {
  readonly position: Position;
}

export default class TicTacToeMove extends Move<
  TicTacToePlayer,
  TicTacToeMove,
  TicTacToeState,
  TicTacToeGame
> {
  readonly position: TicTacToeMoveParams["position"];

  constructor({ description, position, title }: TicTacToeMoveParams) {
    super({ description, title });
    this.position = position;
  }

  /* Getters */

  public getPosition(): Position {
    return this.position;
  }

  public play(state: TicTacToeState): TicTacToeState {
    const lastAssertedPosition = this.position;
    const game = state.getGame();

    const updatedSlots = this.getSlots(state);
    const winner = game.getWinner(updatedSlots, lastAssertedPosition);

    const isFinal = this.isFinal(winner !== null, updatedSlots);
    const nextValidMovesKeys = isFinal
      ? []
      : this.getValidMoves(game, updatedSlots).map(({ key }) => key);

    const updatedScore = this.getScore(
      state.getScore(),
      winner ? winner.key : null,
    );

    return new TicTacToeState({
      game,
      lastAssertedPosition,
      playerKey: this.getPlayer(game, state.getPlayerKey()).key,
      score: updatedScore,
      slots: updatedSlots,
      validMovesKeys: nextValidMovesKeys,
    });
  }

  protected areThereEmptySlots(slots: Slot[]): boolean {
    return slots.some(slot => slot === Slot.Empty);
  }

  protected getPlayer(
    game: TicTacToeGame,
    playerKey: PlayerKey,
  ): TicTacToePlayerPair {
    const nextPlayerKey = game.getNextPlayerKey(playerKey);
    const player = game.getPlayer(nextPlayerKey);
    return {
      key: nextPlayerKey,
      player,
    };
  }

  protected getScore(score: Score, winnerKey: null | PlayerKey): Score {
    if (winnerKey !== null) {
      const winnerCurrentPoints = score[winnerKey] ?? INITIAL_POINTS;
      score[winnerKey] = winnerCurrentPoints + INCREMENT_ONE_POINT;
    }
    return score;
  }

  protected getSlots(state: TicTacToeState): Slot[] {
    const slots = state.getSlots();
    const { indexOfColumn, indexOfRow } = this.position;

    const game = state.getGame();
    const playerKey: PlayerKey = state.getPlayerKey();
    const slotFilledByPlayer = playerKey === PlayerKey.X ? Slot.X : Slot.O;

    const slotKey = indexOfRow * game.getQuantityOfColumns() + indexOfColumn;
    const updatedSlots = [...slots];
    updatedSlots[slotKey] = slotFilledByPlayer;
    return updatedSlots;
  }

  protected getValidMoves(
    game: TicTacToeGame,
    slots: Slot[],
  ): TicTacToeMovePair[] {
    const quantityOfColumns = game.getQuantityOfColumns();
    const validMovesPairs: TicTacToeMovePair[] = [];

    slots.forEach((slot: Slot, index: Integer) => {
      if (slot === Slot.Empty) {
        const indexOfRow = Math.floor(index / quantityOfColumns);
        const indexOfColumn = index % quantityOfColumns;
        const moveKey = indexOfRow * quantityOfColumns + indexOfColumn;

        const move = game.getMove(moveKey);
        if (move !== this) {
          validMovesPairs.push({
            key: moveKey,
            move,
          });
        }
      }
    });
    return validMovesPairs;
  }

  /* Methods */

  protected isFinal(hasWinner: boolean, updatedSlots: Slot[]): boolean {
    return hasWinner || !this.areThereEmptySlots(updatedSlots);
  }
}
