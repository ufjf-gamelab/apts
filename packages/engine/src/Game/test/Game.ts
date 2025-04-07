import Game, {
  type Contents,
  type GameParams,
  type Moves,
  type Players,
} from "../Game.js";
import type { PlayerKey } from "../Player.js";
import TestingContent from "./Content.js";
import { type default as TestingMove, type TestingMoveKey } from "./Move.js";
import { type default as TestingPlayer, TestingPlayerKey } from "./Player.js";
import TestingState, { type TestingSlot } from "./State.js";

type TestingContents = Contents<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

type TestingGameParams = Pick<
  GameParams<TestingPlayer, TestingMove, TestingState, TestingGame>,
  "movesList" | "name" | "playersList"
>;

type TestingMoves = Moves<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

type TestingPlayers = Players<
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
  public constructor({ movesList, name, playersList }: TestingGameParams) {
    const contentsList: TestingContent[] = playersList.map(
      (_, index): TestingContent => new TestingContent({ playerKey: index }),
    );
    super({
      contentsList,
      movesList,
      name,
      playersList,
      quantityOfSlots: 81,
    });
  }

  public override clone(): TestingGame {
    return new TestingGame({
      movesList: Array.from(this.getMoves().values()),
      name: this.getName(),
      playersList: Array.from(this.getPlayers().values()),
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
      null,
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
        return slot === null;
      },
    );
    return new Map(validMoves);
  }

  public override play(move: TestingMove, state: TestingState): TestingState {
    const currentPlayerKey = state.getPlayerKey();

    const updatedSlots: TestingSlot[] = state.getSlots();
    const currentSlot = state.getSlot(move.getPositionWherePlacePlayerKey());

    if (currentSlot === null) {
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

export type {
  TestingContents,
  TestingGameParams,
  TestingMoves,
  TestingPlayers,
};
export { TestingGame as default };
