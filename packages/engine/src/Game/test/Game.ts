import Game, { type GameParams } from "../Game.js";
import type { IndexOfPlayer } from "../Player.js";
import { type default as TestingMove, type TestingMoves } from "./Move.js";
import { type default as TestingPlayer } from "./Player.js";
import TestingSlot from "./Slot.js";
import TestingState from "./State.js";

const ADVANCE_TURN = 1;
const INDEX_OF_INITIAL_PLAYER = 0;
const INITIAL_POINTS = 0;

type TestingGameParams = Pick<
  GameParams<TestingPlayer, TestingMove, TestingState, TestingGame>,
  "moves" | "name" | "players"
>;

class TestingGame extends Game<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
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
  }): TestingMoves {
    const indexOfPlayer = state.getIndexOfPlayer();
    const player = this.getPlayer(indexOfPlayer);
    if (player === null) {
      return [];
    }

    return Array.from(this.getMoves()).filter((move: TestingMove) => {
      const indexOfOccupyingPlayer = move.getIndexOfSlotInWhichPlacePiece();
      const slot = state.getSlot(indexOfOccupyingPlayer);
      return slot === null || slot.getIndexOfPlayer() === indexOfPlayer;
    });
  }

  public override play(move: TestingMove, state: TestingState): TestingState {
    const currentPlayerKey = state.getPlayerKey();

    const updatedSlots: TestingSlot[] = state.getSlots();
    const currentSlot = state.getSlot(move.getIndexOfSlotInWhichPlacePiece());

    if (currentSlot === null) {
      const slotThatRepresentsPlayerKey =
        TestingState.getSlotThatRepresentsPlayerKey(currentPlayerKey);
      updatedSlots[move.getIndexOfSlotInWhichPlacePiece()] =
        slotThatRepresentsPlayerKey;
    }

    return new TestingState({
      game: this,
      playerKey: this.getNextPlayerKey(state),
      slots: updatedSlots,
    });
  }
}

export type { TestingGameParams };
export { TestingGame as default };
