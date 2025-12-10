import type { Integer } from "@repo/engine_core/types.js";
import type { IndexOfMove } from "@repo/game/Move.js";
import type { IndexOfPlayer } from "@repo/game/Player.js";
import type { Points } from "@repo/game/Score.js";

import { INCREMENT_ONE } from "@repo/engine_core/constants.js";
import {
  constructErrorForFinalState,
  constructErrorForInvalidMove,
  Game,
} from "@repo/game/Game.js";

import type { SnowballMove } from "./SnowballMove.js";
import type { SnowballPlayer } from "./SnowballPlayer.js";

import { SnowballScore } from "./SnowballScore.js";
import { QUANTITY_OF_COLUMNS, QUANTITY_OF_ROWS } from "./SnowballShape.js";
import { SnowballSlot } from "./SnowballSlot.js";
import { SnowballState } from "./SnowballState.js";

const ADVANCE_TURN = INCREMENT_ONE;
const INDEX_OF_FIRST_PLAYER: IndexOfPlayer = 0;

const AMOUNT_OF_POINTS_TO_FINISH_MATCH: Points = 15;
const AMOUNT_OF_SLOTS_TO_FINISH_MATCH: Integer = 49;

class SnowballGame extends Game<
  SnowballGame,
  SnowballMove,
  SnowballPlayer,
  SnowballScore,
  SnowballSlot,
  SnowballState
> {
  public override clone() {
    return new SnowballGame({
      moves: this.getMoves(),
      name: this.getName(),
      players: this.getPlayers(),
      slots: this.getSlots(),
    });
  }

  public override constructInitialState(): SnowballState {
    return new SnowballState({
      game: this,
      indexOfPlayer: INDEX_OF_FIRST_PLAYER,
      score: SnowballScore.constructInitialScore({
        quantityOfPlayers: this.getQuantityOfPlayers(),
      }),
      slots: this.getSlots(),
    });
  }

  public override getIndexesOfValidMoves({ state }: { state: SnowballState }) {
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
    state: SnowballState;
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

  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  public override isFinal({ state }: { state: SnowballState }) {
    const amountOfFilledSlots = state
      .getSlots()
      .filter((slot) => slot.getIndexOfOccupyingPlayer() !== null).length;
    if (amountOfFilledSlots >= AMOUNT_OF_SLOTS_TO_FINISH_MATCH) {
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
    move: SnowballMove;
    state: SnowballState;
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
    state: SnowballState;
  }): SnowballState {
    if (this.isFinal({ state })) {
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
      const updatedSlot = new SnowballSlot({
        indexOfOccupyingPlayer: state.getIndexOfPlayer(),
      });
      updatedSlots[indexOfSlotInWhichPlacePiece] = updatedSlot;
    }

    const indexOfNextPlayer = this.getIndexOfNextPlayer({ state });
    const updatedScore = state.getScore().getUpdatedScore({
      slots: updatedSlots,
    });

    return new SnowballState({
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
  SnowballGame,
};
