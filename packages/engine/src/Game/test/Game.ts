import Game, { type GameParams, type Moves } from "../Game.js";
import type { PlayerKey } from "../Player.js";
import { type default as TestingMove, type TestingMoveKey } from "./Move.js";
import { type default as TestingPlayer, TestingPlayerKey } from "./Player.js";
import TestingState, { TestingSlot } from "./State.js";

type TestingGameParams = Pick<
  GameParams<TestingPlayer, TestingMove, TestingState, TestingGame>,
  "moves" | "name" | "players"
>;

type TestingMoves = Moves<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
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
      moves: Array.from(this.getMoves().values()),
      name: this.getName(),
      players: Array.from(this.getPlayers().values()),
    });
  }

  public override getEndOfGameMessage(state: TestingState): string {
    throw new Error("Method not implemented.");
  }

  public override getInitialState(): TestingState {
    const firstPlayerKey = this.getPlayers().keys().next().value;
    if (typeof firstPlayerKey === "undefined") {
      throw new Error("No players found");
    }

    const emptySlots = new Array<TestingSlot>(this.getQuantityOfSlots()).fill(
      TestingSlot.Empty,
    );

    return new TestingState({
      game: this,
      playerKey: firstPlayerKey,
      slots: emptySlots,
    });
  }

  public override getNextPlayerKey(state: TestingState): PlayerKey {
    const currentPlayerKey = state.getPlayerKey();
    switch (currentPlayerKey as TestingPlayerKey) {
      case TestingPlayerKey.One:
        return TestingPlayerKey.Two;
      case TestingPlayerKey.Two:
        return TestingPlayerKey.One;
      default:
        throw new Error(
          `Invalid player key: ${currentPlayerKey}. Expected ${TestingPlayerKey.One} or ${TestingPlayerKey.Two}`,
        );
    }
  }

  public override getValidMoves({
    state,
  }: {
    state: TestingState;
  }): TestingMoves {
    const playerKey = state.getPlayerKey();
    const player = this.getPlayer(playerKey);
    if (player === null) {
      return new Map();
    }

    const slots = state.getSlots();
    const validMoves = Array.from(this.getMoves().entries()).filter(
      ([, move]: [TestingMoveKey, TestingMove]) => {
        const positionWherePlacePlayerKey =
          move.getPositionWherePlacePlayerKey();
        const slot = slots[positionWherePlacePlayerKey];
        return slot === TestingSlot.Empty;
      },
    );
    return new Map(validMoves);
  }

  public override play(move: TestingMove, state: TestingState): TestingState {
    const currentPlayerKey = state.getPlayerKey();

    const updatedSlots: TestingSlot[] = state.getSlots();
    const currentSlot = updatedSlots[move.getPositionWherePlacePlayerKey()];

    if (
      typeof currentSlot !== "undefined" &&
      currentSlot === TestingSlot.Empty
    ) {
      const slotThatRepresentsPlayerKey =
        TestingState.getSlotThatRepresentsPlayerKey(currentPlayerKey);
      updatedSlots[move.getPositionWherePlacePlayerKey()] =
        slotThatRepresentsPlayerKey;
    }

    return new TestingState({
      game: this,
      playerKey: this.getNextPlayerKey(state),
      slots: updatedSlots,
    });
  }
}

export type { TestingGameParams, TestingMoves };
export { TestingGame as default };
