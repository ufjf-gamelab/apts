import type { Game } from "./Game.js";
import type { IndexOfPlayer } from "./Player.js";
import type { Score } from "./Score.js";
import type { Slot } from "./Slot.js";

interface State {
  readonly clone: () => this;
  readonly game: StateParams["game"];
  readonly indexOfPlayer: StateParams["indexOfPlayer"];
  readonly score: StateParams["score"];
  readonly slots: StateParams["slots"];
  readonly toString: () => string;
}

interface StateParams {
  readonly game: Game;
  readonly indexOfPlayer: IndexOfPlayer;
  readonly score: Score;
  readonly slots: readonly Slot[];
}

export type { State, StateParams };
