import type { Integer } from "../../types.js";
import Move, { type MoveParams, type Moves } from "../Move.js";
import type TestingGame from "./Game.js";
import type TestingPlayer from "./Player.js";
import type TestingState from "./State.js";

type TestingMoveParams = MoveParams<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> & {
  positionWherePlacePlayerKey: Integer;
};

type TestingMoves = Moves<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
>;

class TestingMove extends Move<
  TestingPlayer,
  TestingMove,
  TestingState,
  TestingGame
> {
  private readonly positionWherePlacePlayerKey: TestingMoveParams["positionWherePlacePlayerKey"];

  constructor({ positionWherePlacePlayerKey, ...params }: TestingMoveParams) {
    super(params);
    this.positionWherePlacePlayerKey = positionWherePlacePlayerKey;
  }

  public override clone(): TestingMove {
    return new TestingMove({
      description: this.getDescription(),
      positionWherePlacePlayerKey: this.positionWherePlacePlayerKey,
      title: this.getTitle(),
    });
  }

  public getPositionWherePlacePlayerKey(): typeof this.positionWherePlacePlayerKey {
    return this.positionWherePlacePlayerKey;
  }
}

export type { TestingMoves };
export { TestingMove as default };
