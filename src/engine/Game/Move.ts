import { Integer } from "src/types";
import { Player } from "./Game";

export type Points = number;
export type Scoreboard = Map<Player, Points>;
// Content of a slot in the state.
export type Slot = Integer;

export interface MoveOutcome {
  keysOfTheValidMoves: Set<MoveKey>;
  nextPlayer: Player;
  scoreboard: Scoreboard;
  slots: Slot[];
}

export interface MoveParams {
  title: string;
  description: string;
}

export default abstract class Move {
  private readonly title: MoveParams["title"];
  private readonly description: MoveParams["description"];

  constructor({ title, description }: MoveParams) {
    this.title = title;
    this.description = description;
  }

  public getTitle(): MoveParams["title"] {
    return this.title;
  }

  public getDescription(): MoveParams["description"] {
    return this.description;
  }
}

export type MoveKey = Integer;

export interface KeyedMove<M extends Move> {
  key: MoveKey;
  move: M;
}
