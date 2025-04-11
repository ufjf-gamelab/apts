import type { Integer } from "../../types.js";
import Game, { type GameParams } from "../Game.js";
import type { IndexOfPlayer } from "../Player.js";
import type { Score } from "../State.js";
import { type default as TestingMove } from "./Move.js";
import { type default as TestingPlayer } from "./Player.js";
import type { IndexOfTestingPlayer } from "./Player/setup.js";
import {
  adjustScore,
  getIndexOfPlayerWhoIsOccupyingHorizontalLine,
  getIndexOfPlayerWhoIsOccupyingPrincipalDiagonal,
  getIndexOfPlayerWhoIsOccupyingSecondaryDiagonal,
  getIndexOfPlayerWhoIsOccupyingSquareOfOrderThree,
  getIndexOfPlayerWhoIsOccupyingSquareOfOrderTwo,
  getIndexOfPlayerWhoIsOccupyingVerticalLine,
} from "./Shape.js";
import TestingSlot from "./Slot.js";
import TestingState from "./State.js";

const COLUMN_LENGTH: Integer = 9;
const ROW_LENGTH: Integer = 9;
const QUANTITY_OF_SLOTS: Integer = COLUMN_LENGTH * ROW_LENGTH;

const INDEX_OF_INITIAL_PLAYER: IndexOfTestingPlayer = 0;
const ADVANCE_TURN: Integer = 1;

type TestingGameParams = Pick<
  GameParams<
    TestingGame,
    TestingState,
    TestingMove,
    TestingSlot,
    TestingPlayer
  >,
  "moves" | "name" | "players"
>;

class TestingGame extends Game<
  TestingGame,
  TestingState,
  TestingMove,
  TestingSlot,
  TestingPlayer
> {
  public constructor({ moves, name, players }: TestingGameParams) {
    super({
      moves,
      name,
      players,
      quantityOfSlots: QUANTITY_OF_SLOTS,
    });
  }

  public calculateScore(slots: TestingSlot[]): Score {
    const score = TestingState.initializeScore(this.getQuantityOfPlayers());

    slots.forEach((_, indexOfSlot) => {
      const indexOfRow = Math.floor(indexOfSlot / COLUMN_LENGTH);
      const indexOfColumn = indexOfSlot % COLUMN_LENGTH;

      adjustScore({
        indexOfPlayerWhoIsOccupyingShape:
          getIndexOfPlayerWhoIsOccupyingHorizontalLine({
            initialColumnIndex: indexOfColumn,
            initialRowIndex: indexOfRow,
            slots,
          }),
        score,
      });
      adjustScore({
        indexOfPlayerWhoIsOccupyingShape:
          getIndexOfPlayerWhoIsOccupyingVerticalLine({
            initialColumnIndex: indexOfRow,
            initialRowIndex: indexOfColumn,
            slots,
          }),
        score,
      });
      adjustScore({
        indexOfPlayerWhoIsOccupyingShape:
          getIndexOfPlayerWhoIsOccupyingPrincipalDiagonal({
            initialColumnIndex: indexOfRow,
            initialRowIndex: indexOfColumn,
            slots,
          }),
        score,
      });
      adjustScore({
        indexOfPlayerWhoIsOccupyingShape:
          getIndexOfPlayerWhoIsOccupyingSecondaryDiagonal({
            initialColumnIndex: indexOfRow,
            initialRowIndex: indexOfColumn,
            slots,
          }),
        score,
      });
      adjustScore({
        indexOfPlayerWhoIsOccupyingShape:
          getIndexOfPlayerWhoIsOccupyingSquareOfOrderTwo({
            initialColumnIndex: indexOfRow,
            initialRowIndex: indexOfColumn,
            slots,
          }),
        score,
      });
      adjustScore({
        indexOfPlayerWhoIsOccupyingShape:
          getIndexOfPlayerWhoIsOccupyingSquareOfOrderThree({
            initialColumnIndex: indexOfRow,
            initialRowIndex: indexOfColumn,
            slots,
          }),
        score,
      });
    });

    return score;
  }

  public override clone(): TestingGame {
    return new TestingGame({
      moves: this.getMoves(),
      name: this.getName(),
      players: this.getPlayers(),
    });
  }

  public override getEndOfGameMessage(state: TestingState): string {
    throw new Error("Method not implemented.");
  }

  public override getIndexOfNextPlayer(state: TestingState): IndexOfPlayer {
    const indexOfCurrentPlayer = state.getIndexOfPlayer();
    return (indexOfCurrentPlayer + ADVANCE_TURN) % this.getQuantityOfPlayers();
  }

  public override getInitialState(): TestingState {
    const [firstPlayer] = this.getPlayers();
    if (typeof firstPlayer === "undefined") {
      throw new Error("No players found");
    }

    const emptySlots = new Array<TestingSlot>(this.getQuantityOfSlots()).fill(
      new TestingSlot({
        indexOfOccupyingPlayer: null,
      }),
    );

    return new TestingState({
      game: this,
      indexOfPlayer: INDEX_OF_INITIAL_PLAYER,
      score: TestingState.initializeScore(this.getQuantityOfPlayers()),
      slots: emptySlots,
    });
  }

  public override getValidMoves({
    state,
  }: {
    state: TestingState;
  }): readonly TestingMove[] {
    const indexOfPlayer = state.getIndexOfPlayer();
    const player = this.getPlayer(indexOfPlayer);
    if (player === null) {
      return [];
    }

    // Return only the existing moves in which there is no player occupying the related slot
    return Array.from(this.getMoves()).filter((move: TestingMove) => {
      const indexOfSlotInWhichPlacePiece =
        move.getIndexOfSlotInWhichPlacePiece();
      const slotInWhichPlacePiece = state.getSlot(indexOfSlotInWhichPlacePiece);
      if (slotInWhichPlacePiece === null) {
        return false;
      }
      const indexOfOccupyingPlayer =
        slotInWhichPlacePiece.getIndexOfOccupyingPlayer();
      return indexOfOccupyingPlayer === null;
    });
  }

  public override play(move: TestingMove, state: TestingState): TestingState {
    const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();
    const indexOfCurrentPlayer = state.getIndexOfPlayer();

    const updatedSlots = Array.from(state.getSlots());
    if (typeof updatedSlots[indexOfSlotInWhichPlacePiece] !== "undefined") {
      updatedSlots[indexOfSlotInWhichPlacePiece] = new TestingSlot({
        indexOfOccupyingPlayer: indexOfCurrentPlayer,
      });
    }

    const indexOfNextPlayer = this.getIndexOfNextPlayer(state);
    const updatedScore = this.calculateScore(updatedSlots);

    // TODO: Create tests to try to modify the slots array from exterior, to check if it is immutable
    return new TestingState({
      game: this,
      indexOfPlayer: indexOfNextPlayer,
      score: updatedScore,
      slots: updatedSlots,
    });
  }
}

export type { TestingGameParams };
export { COLUMN_LENGTH, TestingGame as default, QUANTITY_OF_SLOTS, ROW_LENGTH };
