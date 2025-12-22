import type { Integer } from "@repo/core/types.js";
import type { IndexOfMove } from "@repo/game/Move.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";
import type { Points } from "@repo/game/Score.js";

import { INCREMENT_ONE } from "@repo/core/constants.js";
import { constructErrorForInvalidMove, Game } from "@repo/game/Game.js";

import type { TicTacToeMove } from "./TicTacToeMove.js";
import type { TicTacToePlayer } from "./TicTacToePlayer.js";

import { TicTacToeScore } from "./TicTacToeScore.js";
import { QUANTITY_OF_COLUMNS, QUANTITY_OF_ROWS } from "./TicTacToeShape.js";
import { TicTacToeSlot } from "./TicTacToeSlot.js";
import { TicTacToeState } from "./TicTacToeState.js";

const ADVANCE_TURN = INCREMENT_ONE;
const INDEX_OF_FIRST_PLAYER: IndexOfPlayer = 0;

const AMOUNT_OF_POINTS_TO_FINISH_MATCH: Points = 1;

const constructErrorForFinalState = ({
  indexOfMove,
}: {
  indexOfMove: IndexOfMove;
}) =>
  new Error(
    `Cannot play move ${indexOfMove} because this state is already final.`,
  );

class TicTacToeGame extends Game<
  TicTacToeGame,
  TicTacToeMove,
  TicTacToePlayer,
  TicTacToeScore,
  TicTacToeSlot,
  TicTacToeState
> {
  public override clone() {
    return new TicTacToeGame({
      moves: this.getMoves(),
      name: this.getName(),
      players: this.getPlayers(),
      slots: this.getSlots(),
    });
  }
  public override constructInitialState(): TicTacToeState {
    return new TicTacToeState({
      game: this,
      indexOfPlayer: INDEX_OF_FIRST_PLAYER,
      score: TicTacToeScore.constructInitialScore({
        quantityOfPlayers: this.getQuantityOfPlayers(),
      }),
      slots: this.getSlots(),
    });
  }
  public override getIndexesOfValidMoves({ state }: { state: TicTacToeState }) {
    const indexesOfValidMoves = new Set<IndexOfMove>();
    this.getMoves().forEach((move, indexOfMove) => {
      if (this.isMoveValid({ move, state })) {
        indexesOfValidMoves.add(indexOfMove);
      }
    });
    return indexesOfValidMoves;
  }

  public override getIndexOfNextPlayer({
    state,
  }: {
    state: TicTacToeState;
  }): IndexOfPlayer {
    const currentIndexOfPlayer = state.getIndexOfPlayer();
    const quantityOfPlayers = this.getPlayers().length;
    return (currentIndexOfPlayer + ADVANCE_TURN) % quantityOfPlayers;
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public override getQuantityOfColumns(): Integer {
    return QUANTITY_OF_COLUMNS;
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public override getQuantityOfRows(): Integer {
    return QUANTITY_OF_ROWS;
  }

  public override isFinal({ state }: { state: TicTacToeState }) {
    const amountOfFilledSlots = state
      .getSlots()
      .filter((slot) => slot.getIndexOfOccupyingPlayer() !== null).length;
    if (amountOfFilledSlots >= this.getQuantityOfSlots()) {
      return true;
    }

    const score = state.getScore();
    for (const points of score.getPointsOfEachPlayer().values()) {
      if (points >= AMOUNT_OF_POINTS_TO_FINISH_MATCH) {
        return true;
      }
    }

    return false;
  }

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public isMoveValid({
    move,
    state,
  }: {
    move: TicTacToeMove;
    state: TicTacToeState;
  }): boolean {
    const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();

    const slotInWhichPlacePiece = state.getSlot({
      indexOfSlot: indexOfSlotInWhichPlacePiece,
    });
    if (slotInWhichPlacePiece === null) {
      return false;
    }

    const indexOfOccupyingPlayer =
      slotInWhichPlacePiece.getIndexOfOccupyingPlayer();
    return indexOfOccupyingPlayer === null;
  }

  public override play({
    indexOfMove,
    state,
  }: {
    indexOfMove: IndexOfMove;
    state: TicTacToeState;
  }): TicTacToeState {
    if (state.isFinal()) {
      throw constructErrorForFinalState({ indexOfMove });
    }

    const move = this.getMove({ indexOfMove });
    if (move === null) {
      throw constructErrorForInvalidMove({
        indexOfMove,
      });
    }

    const moveIsValid = this.isMoveValid({ move, state });
    if (!moveIsValid) {
      throw constructErrorForInvalidMove({
        indexOfMove,
      });
    }

    const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();
    const updatedSlots = Array.from(state.getSlots());

    const slotInWhichPlacePiece = updatedSlots[indexOfSlotInWhichPlacePiece];
    if (typeof slotInWhichPlacePiece !== "undefined") {
      const updatedSlot = new TicTacToeSlot({
        indexOfOccupyingPlayer: state.getIndexOfPlayer(),
      });
      updatedSlots[indexOfSlotInWhichPlacePiece] = updatedSlot;
    }

    const indexOfNextPlayer = this.getIndexOfNextPlayer({ state });
    const updatedScore = state.getScore().getUpdatedScore({
      slots: updatedSlots,
    });

    return new TicTacToeState({
      game: this,
      indexOfPlayer: indexOfNextPlayer,
      score: updatedScore,
      slots: updatedSlots,
    });
  }
}

export {
  constructErrorForFinalState,
  constructErrorForInvalidMove,
  INDEX_OF_FIRST_PLAYER,
  TicTacToeGame,
};
