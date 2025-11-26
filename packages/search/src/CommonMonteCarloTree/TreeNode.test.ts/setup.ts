import type { Game } from "@repo/game/Game.js";
import type { GameWithData } from "@repo/game/Game.test/setup.js";
import type { Move } from "@repo/game/Move.js";
import type {
  MoveWithData,
  MoveWithDataAndIndex,
} from "@repo/game/Move.test/setup.js";
import type { Player } from "@repo/game/Player.js";
import type { PlayerWithData } from "@repo/game/Player.test/setup.js";
import type { Score } from "@repo/game/Score.js";
import type { ScoreWithData } from "@repo/game/Score.test/setup.js";
import type { Slot } from "@repo/game/Slot.js";
import type { SlotWithData } from "@repo/game/Slot.test/setup.js";
import type { State } from "@repo/game/State.js";
import type { StateWithData } from "@repo/game/State.test/setup.js";

import type { ParamsOfTreeNode } from "../TreeNode.js";

type DerivedParamsOfTreeNode<
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
> = Pick<
  ParamsOfTreeNode<G, M, P, Sc, Sl, St>,
  "explorationConstant" | "indexOfPlayedMove" | "parent" | "state"
>;

type RequiredParamsOfTreeNode<
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
  ExtendedGameWithData extends GameWithData<
    G,
    M,
    P,
    Sc,
    Sl,
    St,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedScoreWithData extends ScoreWithData<P, Sc>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
> = Pick<
  ParamsOfTreeNode<G, M, P, Sc, Sl, St>,
  "explorationConstant" | "parent"
> & {
  playedMoveWithDataAndIndex: MoveWithDataAndIndex<M, ExtendedMoveWithData>;
  stateWithData: StateWithData<
    G,
    M,
    P,
    Sc,
    Sl,
    St,
    ExtendedGameWithData,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedScoreWithData,
    ExtendedSlotWithData
  >;
};

const deriveParamsOfTreeNode = <
  G extends Game<G, M, P, Sc, Sl, St>,
  M extends Move<M>,
  P extends Player<P>,
  Sc extends Score<Sc>,
  Sl extends Slot<Sl>,
  St extends State<G, M, P, Sc, Sl, St>,
  ExtendedGameWithData extends GameWithData<
    G,
    M,
    P,
    Sc,
    Sl,
    St,
    ExtendedMoveWithData,
    ExtendedPlayerWithData,
    ExtendedSlotWithData
  >,
  ExtendedMoveWithData extends MoveWithData<M>,
  ExtendedPlayerWithData extends PlayerWithData<P>,
  ExtendedScoreWithData extends ScoreWithData<P, Sc>,
  ExtendedSlotWithData extends SlotWithData<Sl>,
>({
  explorationConstant,
  parent,
  playedMoveWithDataAndIndex,
  stateWithData,
}: RequiredParamsOfTreeNode<
  G,
  M,
  P,
  Sc,
  Sl,
  St,
  ExtendedGameWithData,
  ExtendedMoveWithData,
  ExtendedPlayerWithData,
  ExtendedScoreWithData,
  ExtendedSlotWithData
>): DerivedParamsOfTreeNode<G, M, P, Sc, Sl, St> => ({
  explorationConstant,
  indexOfPlayedMove: playedMoveWithDataAndIndex.indexOfMove,
  parent,
  state: stateWithData.state,
});
