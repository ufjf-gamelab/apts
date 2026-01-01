import type { Game } from "@repo/game/Game.js";
import type { Move } from "@repo/game/Move.js";
import type { IndexOfPlayer, Player } from "@repo/game/Player.js";
import type { PointsOfEachPlayer, Score } from "@repo/game/Score.js";
import type { Slot } from "@repo/game/Slot.js";
import type { State } from "@repo/game/State.js";

import type { QualityOfMatch } from "./MonteCarloTree/TreeNode.js";

const MINIMUM_POINTS_OF_PLAYER = Number.NEGATIVE_INFINITY;

const calculateQualityOfMatch = <
  GenericGame extends Game<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
  GenericMove extends Move<GenericMove>,
  GenericPlayer extends Player<GenericPlayer>,
  GenericScore extends Score<GenericScore>,
  GenericSlot extends Slot<GenericSlot>,
  GenericState extends State<
    GenericGame,
    GenericMove,
    GenericPlayer,
    GenericScore,
    GenericSlot,
    GenericState
  >,
>({
  indexOfPlayerWhoPlayedMove,
  pointsOfEachPlayer,
}: {
  indexOfPlayerWhoPlayedMove: IndexOfPlayer | null;
  pointsOfEachPlayer: PointsOfEachPlayer;
}): QualityOfMatch => {
  if (indexOfPlayerWhoPlayedMove === null) {
    return MINIMUM_POINTS_OF_PLAYER;
  }

  let pointsOfOpponentPlayerWithMostPoints = MINIMUM_POINTS_OF_PLAYER;
  let pointsOfPlayerWhoPlayedMove = MINIMUM_POINTS_OF_PLAYER;

  pointsOfEachPlayer.entries().forEach(([indexOfPlayer, pointsOfPlayer]) => {
    if (indexOfPlayer === indexOfPlayerWhoPlayedMove) {
      pointsOfPlayerWhoPlayedMove = pointsOfPlayer;
    } else if (pointsOfPlayer > pointsOfOpponentPlayerWithMostPoints) {
      pointsOfOpponentPlayerWithMostPoints = pointsOfPlayer;
    }
  });

  if (!(pointsOfPlayerWhoPlayedMove > MINIMUM_POINTS_OF_PLAYER)) {
    throw Error("Could not retrieve the points of the player who played move.");
  }

  if (!(pointsOfOpponentPlayerWithMostPoints > MINIMUM_POINTS_OF_PLAYER)) {
    throw Error(
      "Could not retrieve the points of opponent player with most points.",
    );
  }

  return pointsOfPlayerWhoPlayedMove - pointsOfOpponentPlayerWithMostPoints;
};

export { calculateQualityOfMatch };
