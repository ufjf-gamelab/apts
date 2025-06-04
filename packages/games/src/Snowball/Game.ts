import Game, { type GameParams } from "@repo/engine/Game/Game.js";
import type { IndexOfPlayer } from "@repo/engine/Game/Player.js";
import type { Points, Score } from "@repo/engine/Game/State.js";
import type { Integer } from "@repo/engine/types.js";

import { type default as TestingMove } from "./Move.js";
import { type default as TestingPlayer } from "./Player.js";
import {
  incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots,
  type Shape,
} from "./Shape.js";
import TestingSlot from "./Slot.js";
import TestingState from "./State.js";
import type { IndexOfTestingMove } from "./tests/Move/setup.js";
import type { IndexOfTestingPlayer } from "./tests/Player/setup.js";

const COLUMN_LENGTH: Integer = 9;
const ROW_LENGTH: Integer = 9;
const QUANTITY_OF_SLOTS: Integer = COLUMN_LENGTH * ROW_LENGTH;

const INDEX_OF_INITIAL_PLAYER: IndexOfTestingPlayer = 0;
const ADVANCE_TURN: Integer = 1;

const AMOUNT_OF_POINTS_TO_FINISH_MATCH: Points = 15;
const AMOUNT_OF_SLOTS_TO_FINISH_MATCH: Points = 49;

enum SizeOfPatternsUsedForCalculatingPoints {
  LargeSquare = 3,
  Line = 5,
  SmallSquare = 2,
}

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

      const updateScoreConsideringShape = (shape: Shape): void => {
        incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots({
          initialIndexOfColumn: indexOfColumn,
          initialIndexOfRow: indexOfRow,
          score,
          shape,
          slots,
        });
      };

      updateScoreConsideringShape({
        direction: "horizontal",
        size: SizeOfPatternsUsedForCalculatingPoints.Line,
        type: "line",
      });
      updateScoreConsideringShape({
        direction: "vertical",
        size: SizeOfPatternsUsedForCalculatingPoints.Line,
        type: "line",
      });
      updateScoreConsideringShape({
        direction: "principalDiagonal",
        size: SizeOfPatternsUsedForCalculatingPoints.Line,
        type: "line",
      });
      updateScoreConsideringShape({
        direction: "secondaryDiagonal",
        size: SizeOfPatternsUsedForCalculatingPoints.Line,
        type: "line",
      });
      updateScoreConsideringShape({
        horizontalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
        type: "rectangle",
        verticalSize: SizeOfPatternsUsedForCalculatingPoints.SmallSquare,
      });
      updateScoreConsideringShape({
        horizontalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
        type: "rectangle",
        verticalSize: SizeOfPatternsUsedForCalculatingPoints.LargeSquare,
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

  public override getIndexOfNextPlayer(state: TestingState): IndexOfPlayer {
    const indexOfCurrentPlayer = state.getIndexOfPlayer();
    return (indexOfCurrentPlayer + ADVANCE_TURN) % this.getQuantityOfPlayers();
  }

  public override getInitialState(): TestingState {
    const [firstPlayer] = this.getPlayers();
    if (typeof firstPlayer === "undefined") {
      throw new Error("There are no players registered for this game");
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

  public override getValidMoves(
    state: TestingState,
  ): readonly [IndexOfTestingMove, TestingMove][] {
    const validMoves: [IndexOfTestingMove, TestingMove][] = [];
    this.getMoves().forEach((move, indexOfMove) => {
      if (this.isMoveValid(move, state)) {
        validMoves.push([indexOfMove, move]);
      }
    });
    return validMoves;
  }

  public override isFinal(state: TestingState): boolean {
    const amountOfFilledSlots = state
      .getSlots()
      .filter(
        (slot: TestingSlot) => slot.getIndexOfOccupyingPlayer() !== null,
      ).length;
    if (amountOfFilledSlots === AMOUNT_OF_SLOTS_TO_FINISH_MATCH) {
      return true;
    }

    for (const points of state.getScore()) {
      if (points >= AMOUNT_OF_POINTS_TO_FINISH_MATCH) {
        return true;
      }
    }

    return false;
  }

  public override play(
    indexOfMove: IndexOfTestingMove,
    state: TestingState,
  ): TestingState {
    const move = this.getMove(indexOfMove);
    if (move === null) {
      return state.clone();
    }

    const moveIsValid = this.isMoveValid(move, state);
    if (!moveIsValid) {
      throw new Error(
        `Cannot play move ${indexOfMove} because it is not valid.`,
      );
    }

    const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();
    const updatedSlots = Array.from(state.getSlots());

    const slotInWhichPlacePiece = updatedSlots[indexOfSlotInWhichPlacePiece];
    if (typeof slotInWhichPlacePiece !== "undefined") {
      const updatedSlot = new TestingSlot({
        indexOfOccupyingPlayer: state.getIndexOfPlayer(),
      });
      updatedSlots[indexOfSlotInWhichPlacePiece] = updatedSlot;
    }

    const indexOfNextPlayer = this.getIndexOfNextPlayer(state);
    const updatedScore = this.calculateScore(updatedSlots);

    return new TestingState({
      game: this,
      indexOfPlayer: indexOfNextPlayer,
      score: updatedScore,
      slots: updatedSlots,
    });
  }

  private isMoveValid(move: TestingMove, state: TestingState): boolean {
    const indexOfSlotInWhichPlacePiece = move.getIndexOfSlotInWhichPlacePiece();

    const slotInWhichPlacePiece = state.getSlot(indexOfSlotInWhichPlacePiece);
    if (slotInWhichPlacePiece === null) {
      return false;
    }

    const indexOfOccupyingPlayer =
      slotInWhichPlacePiece.getIndexOfOccupyingPlayer();
    return indexOfOccupyingPlayer === null;
  }
}

export type { TestingGameParams };
export {
  COLUMN_LENGTH,
  TestingGame as default,
  incrementScoreIfPlayerOccupiesShapeAtCoordinatesInSlots,
  QUANTITY_OF_SLOTS,
  ROW_LENGTH,
  SizeOfPatternsUsedForCalculatingPoints,
};
