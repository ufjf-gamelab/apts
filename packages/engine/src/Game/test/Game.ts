import Game, { type GameParams } from "../Game.js";
import type { IndexOfPlayer } from "../Player.js";
import { type default as TestingMove } from "./Move.js";
import { type default as TestingPlayer } from "./Player.js";
import TestingSlot from "./Slot.js";
import TestingState from "./State.js";

const ADVANCE_TURN = 1;
const INDEX_OF_INITIAL_PLAYER = 0;
const INITIAL_POINTS = 0;

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
      quantityOfSlots: 81,
    });
  }

  public override clone(): TestingGame {
    return new TestingGame({
      moves: this.getMoves(),
      name: this.getName(),
      players: Array.from(this.getPlayers().values()),
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
      score: new Array(this.getQuantityOfPlayers()).fill(INITIAL_POINTS),
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
    // TODO: Calculate the score based on the game rules
    const updatedScore = Array.from(state.getScore());

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
export { TestingGame as default, INITIAL_POINTS };
